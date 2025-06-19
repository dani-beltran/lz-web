// Google Analytics utility functions
import GA_CONFIG from '../config/analytics.js';

// Initialize Google Analytics
export function initGA(measurementId = GA_CONFIG.MEASUREMENT_ID) {
  if (!GA_CONFIG.ENABLED) {
    if (GA_CONFIG.DEBUG) {
      console.log('Google Analytics is disabled in this environment');
    }
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: GA_CONFIG.DEBUG,
    });
    
    if (GA_CONFIG.DEBUG) {
      console.log('Google Analytics initialized with ID:', measurementId);
    }
  }
}

// Track page views
export function trackPageView(pagePath, pageTitle) {
  if (!GA_CONFIG.ENABLED || typeof window === 'undefined' || !window.gtag) {
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
  if (!GA_CONFIG.ENABLED || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, parameters);
  
  if (GA_CONFIG.DEBUG) {
    console.log('Event tracked:', eventName, parameters);
  }
}

// Track conversions
export function trackConversion(conversionName, value = null) {
  if (!GA_CONFIG.ENABLED || typeof window === 'undefined' || !window.gtag) {
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
