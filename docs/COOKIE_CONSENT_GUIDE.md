# Cookie Consent Implementation Guide

This document explains the cookie consent system integrated with Google Analytics in your Vue.js application.

## Overview

The application now includes a comprehensive cookie consent system that:
- Shows a modal to users before any tracking begins
- Allows granular consent for different cookie types
- Only loads Google Analytics scripts after user consent
- Stores consent preferences in localStorage
- Provides an easy way for users to change their preferences

## Components

### 1. CookieConsent.vue
The main consent modal component that:
- Displays when a user visits the site for the first time
- Allows users to accept/reject different types of cookies
- Stores consent preferences
- Emits events when consent is given

### 2. CookieSettingsButton.vue
A button component that can be added to footers or settings pages to allow users to modify their cookie preferences.

### 3. Cookie Consent Utilities (`src/utils/cookieConsent.js`)
Helper functions for managing consent:
- `getStoredConsent()` - Get current consent from localStorage
- `saveConsent(consent)` - Save consent to localStorage
- `hasConsent(category)` - Check if user consented to a category
- `hasAnalyticsConsent()` - Check analytics consent specifically
- `clearConsent()` - Clear all consent data

### 4. Updated Analytics (`src/utils/analytics.js`)
Analytics functions now:
- Check for user consent before tracking
- Load Google Analytics scripts dynamically only after consent
- Provide debug logging when consent is missing

## How It Works

### Initial Visit
1. User visits the website
2. Cookie consent modal appears
3. Google Analytics scripts are NOT loaded yet
4. User can choose to accept/reject different cookie types
5. If analytics cookies are accepted, GA scripts load and tracking begins

### Return Visits
1. System checks localStorage for existing consent
2. If consent exists and analytics is approved, GA initializes automatically
3. If no consent or analytics rejected, no tracking occurs

### Consent Categories

#### Necessary Cookies (Always Required)
- Essential for website functionality
- Cannot be disabled
- Used for basic site operations

#### Analytics Cookies (Optional)
- Google Analytics tracking
- Used for understanding user behavior
- Only loaded after explicit consent

#### Marketing Cookies (Optional)
- Currently prepared for future use
- Can be used for advertising tracking
- Fully optional

## Privacy Features

### Data Protection
- **Consent Required**: No tracking without explicit consent
- **Granular Control**: Users can accept only necessary cookies
- **IP Anonymization**: GA configured with `anonymize_ip: true`
- **Version Control**: Consent can be re-requested if privacy policy changes

### User Rights
- **Easy Opt-out**: Users can reject all optional cookies
- **Preference Management**: Settings can be changed anytime
- **Clear Information**: Detailed explanations of each cookie type
- **No Dark Patterns**: Equal prominence for accept/reject options

## Configuration

### Consent Storage
Consent is stored in localStorage with this structure:
```json
{
  "necessary": true,
  "analytics": false,
  "marketing": false,
  "timestamp": "2025-06-19T10:30:00.000Z",
  "version": "1.0"
}
```

### Version Control
If you update privacy policies or consent requirements:
1. Change `CONSENT_VERSION` in `src/utils/cookieConsent.js`
2. Users will be prompted for consent again

### Environment Settings
The system respects the domain-based configuration:
- Only tracks on `layerz.com` domain
- Debug mode available with `?ga_debug=1`

## Integration Examples

### Adding Cookie Settings to Footer

```vue
<template>
  <footer>
    <!-- Other footer content -->
    <CookieSettingsButton @show-settings="showCookieSettings" />
  </footer>
</template>

<script>
import CookieSettingsButton from './CookieSettingsButton.vue';

export default {
  components: {
    CookieSettingsButton
  },
  methods: {
    showCookieSettings() {
      // Access the parent app's cookie consent component
      this.$parent.showCookieSettings();
    }
  }
}
</script>
```

### Tracking Events with Consent Check

```vue
<script>
import { trackButtonClick } from '@/utils/analytics.js';

export default {
  methods: {
    handleClick() {
      // This will automatically check consent before tracking
      trackButtonClick('signup-button', 'hero-section');
      
      // Your other click logic
    }
  }
}
</script>
```

## Compliance

### GDPR Compliance
- ✅ Explicit consent required
- ✅ Granular control over cookie types
- ✅ Easy withdrawal of consent
- ✅ Clear information about data processing
- ✅ No pre-ticked boxes

### CCPA Compliance
- ✅ Clear opt-out mechanism
- ✅ No sale of personal information without consent
- ✅ Transparent data usage descriptions

### General Best Practices
- ✅ Consent before data collection
- ✅ Purpose limitation (only collect what's needed)
- ✅ User control and transparency
- ✅ Data minimization

## Testing

### Manual Testing
1. Clear localStorage: `localStorage.clear()`
2. Refresh the page
3. Verify consent modal appears
4. Test different consent combinations
5. Check that GA only loads after analytics consent

### Debug Mode
Add `?ga_debug=1` to the URL to see:
- Console logs for all tracking attempts
- Consent status checks
- GA initialization messages

### Console Commands
```javascript
// Check current consent
console.log(JSON.parse(localStorage.getItem('cookie-consent')));

// Clear consent (will show modal again)
localStorage.removeItem('cookie-consent');

// Check if analytics consent is given
import { hasAnalyticsConsent } from './src/utils/cookieConsent.js';
console.log(hasAnalyticsConsent());
```

## Customization

### Styling
The consent modal is fully styled and responsive. To customize:
1. Edit styles in `CookieConsent.vue`
2. Colors, fonts, and layout can be adjusted
3. Mobile-responsive design included

### Content
To modify the consent text:
1. Edit the template in `CookieConsent.vue`
2. Update cookie descriptions
3. Modify button text and links

### Additional Cookie Types
To add new cookie categories:
1. Update `DEFAULT_CONSENT` in `cookieConsent.js`
2. Add new checkboxes to `CookieConsent.vue`
3. Create new utility functions for checking consent

## Troubleshooting

### Common Issues

1. **Modal not showing**
   - Check if consent is already stored in localStorage
   - Clear localStorage to reset

2. **GA not tracking after consent**
   - Check browser console for errors
   - Verify domain matches `layerz.com`
   - Ensure debug mode shows consent status

3. **Consent not persisting**
   - Check if localStorage is enabled
   - Verify no browser extensions are blocking storage

### Support

The system includes comprehensive error handling and debug logging. Most issues can be diagnosed by:
1. Enabling debug mode (`?ga_debug=1`)
2. Checking browser console
3. Verifying localStorage contents
