# Google Analytics Setup Guide

This guide explains how to configure and use Google Analytics in your Vue.js application.

## Setup Instructions

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Navigate to Admin > Property > Data Streams
4. Create a new Web stream or select an existing one
5. Copy your Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Your Application

1. **Update the HTML file** (`src/index.html`):
   Replace `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. **Update the configuration file** (`src/config/analytics.js`):
   Replace `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```javascript
   MEASUREMENT_ID: 'G-XXXXXXXXXX',
   ```

### 3. Environment Configuration

The analytics are configured to only track in production by default. To modify this behavior, update the `ENABLED` setting in `src/config/analytics.js`:

```javascript
// Track in all environments
ENABLED: true,

// Only track in production (default)
ENABLED: process.env.NODE_ENV === 'production',

// Only track in development
ENABLED: process.env.NODE_ENV === 'development',
```

## Available Tracking Functions

### Basic Tracking
- `trackPageView(path, title)` - Track page views
- `trackEvent(name, parameters)` - Track custom events

### Specific Event Tracking
- `trackButtonClick(buttonName, section)` - Track button clicks
- `trackFormSubmission(formName)` - Track form submissions
- `trackSectionView(sectionName)` - Track section views
- `trackConversion(conversionName, value)` - Track conversions
- `trackScrollDepth(percentage)` - Track scroll depth

### Setup Functions
- `initGA()` - Initialize Google Analytics
- `setupScrollTracking()` - Set up automatic scroll tracking

## Usage Examples

### In Vue Components

```javascript
import { trackButtonClick, trackSectionView } from '@/utils/analytics.js';

export default {
  mounted() {
    // Track when this section comes into view
    trackSectionView('hero-section');
  },
  methods: {
    handleButtonClick() {
      // Track button clicks
      trackButtonClick('cta-button', 'hero-section');
      
      // Your button logic here
    }
  }
}
```

### Tracking Form Submissions

```javascript
import { trackFormSubmission } from '@/utils/analytics.js';

methods: {
  submitForm() {
    // Track the form submission
    trackFormSubmission('contact-form');
    
    // Your form submission logic here
  }
}
```

### Tracking Conversions

```javascript
import { trackConversion } from '@/utils/analytics.js';

methods: {
  completePurchase() {
    // Track conversion with value
    trackConversion('purchase', 99.99);
    
    // Your conversion logic here
  }
}
```

## Features Included

### Automatic Tracking
- **Page Views**: Automatically tracked when the app loads
- **Scroll Depth**: Automatically tracks when users scroll to 25%, 50%, 75%, 90%, and 100% of the page

### Debug Mode
In development mode, all tracking events are logged to the console for debugging purposes.

### Environment Controls
- Tracking is disabled by default in development
- Easy to enable/disable for different environments
- Debug logging available for development

## Customization

### Adding Custom Events
To add new custom events, update the `EVENTS` object in `src/config/analytics.js`:

```javascript
EVENTS: {
  // Existing events...
  CUSTOM_EVENT: 'custom_event_name',
},
```

Then create a new function in `src/utils/analytics.js`:

```javascript
export function trackCustomEvent(parameter) {
  trackEvent(GA_CONFIG.EVENTS.CUSTOM_EVENT, {
    custom_parameter: parameter,
  });
}
```

### Custom Dimensions
If you're using custom dimensions in Google Analytics, configure them in `src/config/analytics.js`:

```javascript
CUSTOM_DIMENSIONS: {
  user_type: 'custom_map.user_type',
  page_section: 'custom_map.page_section',
},
```

## Privacy Considerations

- Consider implementing cookie consent before initializing Google Analytics
- You may want to anonymize IP addresses by adding `anonymize_ip: true` to the config
- Ensure compliance with GDPR, CCPA, and other privacy regulations

## Testing

To test that Google Analytics is working:

1. Set `DEBUG: true` in the configuration
2. Open your browser's developer console
3. Navigate through your application
4. Look for console logs showing tracked events
5. Check Google Analytics Real-Time reports to see live data

## Troubleshooting

### Common Issues

1. **Events not showing in Google Analytics**
   - Check that your Measurement ID is correct
   - Ensure tracking is enabled (`ENABLED: true`)
   - Check browser console for errors

2. **Console errors about gtag**
   - Make sure the gtag script is loading properly
   - Check that the Measurement ID in the HTML matches your config

3. **No data in development**
   - This is expected behavior. Set `ENABLED: true` to track in development

### Testing in Development

To enable tracking in development for testing:

```javascript
// In src/config/analytics.js
ENABLED: true, // Enable tracking
DEBUG: true,   // Enable console logging
```

Remember to revert these changes before deploying to production if you only want to track production traffic.
