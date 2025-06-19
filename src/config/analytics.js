// Google Analytics Configuration
// Update this file with your actual Google Analytics settings

export const GA_CONFIG = {
  // Replace with your actual Google Analytics Measurement ID
  // You can find this in your Google Analytics account under Admin > Property > Data Streams
  MEASUREMENT_ID: "G-2S3Z5RKT6P", // Format: G-XXXXXXXXXX

  // Optional: Set up custom dimensions and metrics
  CUSTOM_DIMENSIONS: {
    // user_type: "custom_map.user_type",
    // page_section: "custom_map.page_section",
  },

  // Track specific events
  EVENTS: {
    SECTION_VIEW: "section_view",
    BUTTON_CLICK: "button_click",
    FORM_SUBMIT: "form_submit",
    SCROLL_DEPTH: "scroll_depth",
    TIME_ON_PAGE: "time_on_page",
  },

  // Enable/disable tracking in different environments
  ENABLED: window?.location.hostname === "layerz.com", // Only track on layerz.com domain

  // Enable debug mode with ?ga_debug=1
  DEBUG:
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("ga-debug") === "1",
};

export default GA_CONFIG;
