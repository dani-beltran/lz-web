import { ref, onMounted, onBeforeUnmount } from "vue";
import { trackSectionView } from "@/utils/analytics";

/**
 * Composable for tracking when a component/section becomes visible on screen
 * Uses Intersection Observer API to detect visibility and tracks with analytics
 * Automatically handles tall sections that are larger than the viewport height
 *
 * @param {string} sectionName - The name identifier for the section to track
 * @param {Object} options - Configuration options for the intersection observer
 * @param {number} options.threshold - Visibility threshold for normal sections (0-1, default: 0.5)
 * @param {string} options.rootMargin - Root margin for the observer (default: "0px 0px -20% 0px")
 * @param {boolean} options.trackOnce - Whether to track only once per session (default: true)
 * @returns {Object} - Object containing hasBeenViewed ref and setupTracking function
 *
 * @note For sections taller than the viewport, the composable automatically uses a
 * pixel-based threshold (minimum 300px or 30% of viewport visible) instead of percentage-based
 */
export function useViewTracking(sectionName, options = {}) {
  const {
    threshold = 0.5,
    rootMargin = "0px 0px -20% 0px",
    trackOnce = true,
  } = options;

  // Reactive state
  const hasBeenViewed = ref(false);
  const intersectionObserver = ref(null);

  // Calculate optimal thresholds for tall sections
  const calculateThresholds = (element) => {
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    // If section is smaller than viewport, use the configured threshold
    if (elementHeight <= viewportHeight) {
      return [threshold];
    }

    // For tall sections, use multiple thresholds including a minimum pixel-based threshold
    const minPixelsVisible = Math.min(300, viewportHeight * 0.3); // At least 300px or 30% of viewport
    const pixelThreshold = minPixelsVisible / elementHeight;

    // Use the larger of the pixel-based threshold or a minimum of 0.1
    const effectiveThreshold = Math.max(pixelThreshold, 0.1);

    return [effectiveThreshold, threshold].filter((t) => t <= 1);
  };

  /**
   * Sets up the intersection observer for view tracking
   * @param {HTMLElement} element - The DOM element to observe
   */
  const setupTracking = (element) => {
    // Only track once per session if trackOnce is enabled
    if (trackOnce && hasBeenViewed.value) return;

    // Validate element
    if (!element) {
      console.warn("useViewTracking: No element provided for observation");
      return;
    }

    // Create intersection observer to track when section becomes visible
    intersectionObserver.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!trackOnce || !hasBeenViewed.value)) {
            // Track that section has been viewed
            trackSectionView(sectionName);
            hasBeenViewed.value = true;

            // Disconnect observer after first view if trackOnce is enabled
            if (trackOnce && intersectionObserver.value) {
              intersectionObserver.value.disconnect();
              intersectionObserver.value = null;
            }
          }
        });
      },
      {
        threshold: calculateThresholds(element),
        rootMargin,
      }
    );

    // Start observing the element
    intersectionObserver.value.observe(element);
  };

  /**
   * Cleanup function to disconnect the observer
   */
  const cleanup = () => {
    if (intersectionObserver.value) {
      intersectionObserver.value.disconnect();
      intersectionObserver.value = null;
    }
  };

  /**
   * Reset the tracking state (useful for testing or manual resets)
   */
  const reset = () => {
    hasBeenViewed.value = false;
    cleanup();
  };

  // Cleanup on component unmount
  onBeforeUnmount(() => {
    cleanup();
  });

  return {
    hasBeenViewed,
    setupTracking,
    cleanup,
    reset,
  };
}

/**
 * Convenience composable that automatically sets up tracking on mount
 * for components using the Composition API
 *
 * @param {string} sectionName - The name identifier for the section to track
 * @param {Object} options - Configuration options (same as useViewTracking)
 * @returns {Object} - Object containing hasBeenViewed ref and manual control functions
 */
export function useAutoViewTracking(sectionName, options = {}) {
  const { hasBeenViewed, setupTracking, cleanup, reset } = useViewTracking(
    sectionName,
    options
  );
  const elementRef = ref(null);

  onMounted(() => {
    if (elementRef.value) {
      setupTracking(elementRef.value);
    }
  });

  return {
    elementRef,
    hasBeenViewed,
    setupTracking,
    cleanup,
    reset,
  };
}
