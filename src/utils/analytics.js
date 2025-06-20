// Google Analytics utility functions
import GA_CONFIG from '../config/analytics.js';
import { hasAnalyticsConsent } from './cookieConsent.js';

// Track if GA scripts have been loaded
let scriptsLoaded = false;

// Load Google Analytics scripts dynamically
function loadGAScripts() {
  if (scriptsLoaded || typeof window === 'undefined') return Promise.resolve();

  return new Promise((resolve) => {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.MEASUREMENT_ID}`;
    
    script.onload = () => {
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      
      scriptsLoaded = true;
      resolve();
    };
    
    document.head.appendChild(script);
  });
}

// Check if analytics is enabled and user has consented
function canTrack() {
  return GA_CONFIG.ENABLED && hasAnalyticsConsent() && typeof window !== 'undefined' && window.gtag;
}

// Initialize Google Analytics (only if user has consented)
export async function initGA(measurementId = GA_CONFIG.MEASUREMENT_ID) {
  if (!GA_CONFIG.ENABLED) {
    if (GA_CONFIG.DEBUG) {
      console.log('Google Analytics is disabled in this environment');
    }
    return;
  }

  if (!hasAnalyticsConsent()) {
    if (GA_CONFIG.DEBUG) {
      console.log('Google Analytics not initialized - user has not consented to analytics cookies');
    }
    return;
  }

  // Load GA scripts first
  await loadGAScripts();

  if (window.gtag) {
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: GA_CONFIG.DEBUG,
      anonymize_ip: true, // Privacy enhancement
    });
    
    if (GA_CONFIG.DEBUG) {
      console.log('Google Analytics initialized with ID:', measurementId);
    }
  }
}

// Track page views
export function trackPageView(pagePath, pageTitle) {
  if (!canTrack()) {
    if (GA_CONFIG.DEBUG) {
      console.log('Page view not tracked - analytics disabled or no consent');
    }
    return;
  }

  window.gtag('config', GA_CONFIG.MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
  });
  
  if (GA_CONFIG.DEBUG) {
    console.log('Page view tracked:', { pagePath, pageTitle });
  }
}

// Track custom events
export function trackEvent(eventName, parameters = {}) {
  if (!canTrack()) {
    if (GA_CONFIG.DEBUG) {
      console.log('Event not tracked - analytics disabled or no consent:', eventName, parameters);
    }
    return;
  }

  window.gtag('event', eventName, parameters);
  
  if (GA_CONFIG.DEBUG) {
    console.log('Event tracked:', eventName, parameters);
  }
}

// Track conversions
export function trackConversion(conversionName, value = null) {
  if (!canTrack()) {
    if (GA_CONFIG.DEBUG) {
      console.log('Conversion not tracked - analytics disabled or no consent:', conversionName);
    }
    return;
  }

  const params = {};
  if (value) {
    params.value = value;
    params.currency = 'USD'; // You can change this to your preferred currency
  }
  
  window.gtag('event', 'conversion', {
    send_to: `${GA_CONFIG.MEASUREMENT_ID}/${conversionName}`,
    ...params
  });
  
  if (GA_CONFIG.DEBUG) {
    console.log('Conversion tracked:', conversionName, params);
  }
}

// Track button clicks
export function trackButtonClick(buttonName, section = null) {
  trackEvent(GA_CONFIG.EVENTS.BUTTON_CLICK, {
    button_name: buttonName,
    section: section,
  });
}

// Track form submissions
export function trackFormSubmission(formName) {
  trackEvent(GA_CONFIG.EVENTS.FORM_SUBMIT, {
    form_name: formName,
  });
}

// Track section views (useful for single page applications)
export function trackSectionView(sectionName) {
  trackEvent(GA_CONFIG.EVENTS.SECTION_VIEW, {
    section_name: sectionName,
  });
}

// Track scroll depth
export function trackScrollDepth(percentage) {
  trackEvent(GA_CONFIG.EVENTS.SCROLL_DEPTH, {
    scroll_depth: percentage,
  });
}

// Set up scroll tracking
export function setupScrollTracking() {
  if (!GA_CONFIG.ENABLED) return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  const trackedMilestones = new Set();

  function handleScroll() {
    // Only track if user has consented
    if (!hasAnalyticsConsent()) return;
    
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    if (scrolled > maxScroll) {
      maxScroll = scrolled;
      
      milestones.forEach(milestone => {
        if (scrolled >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// Function to reinitialize analytics after consent is given
export async function reinitializeAnalytics() {
  if (hasAnalyticsConsent()) {
    await initGA();
    setupScrollTracking();
  }
}
