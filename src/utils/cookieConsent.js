// Cookie consent management utilities

export const CONSENT_STORAGE_KEY = 'cookie-consent';
export const CONSENT_VERSION = '1.0';

// Default consent state
export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false
};

// Get current consent from localStorage
export function getStoredConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    
    const consentData = JSON.parse(stored);
    
    // Check if consent version is current
    if (consentData.version !== CONSENT_VERSION) {
      return null; // Force re-consent if version changed
    }
    
    return consentData;
  } catch (error) {
    console.error('Error reading consent from localStorage:', error);
    return null;
  }
}

// Save consent to localStorage
export function saveConsent(consent) {
  try {
    const consentData = {
      ...consent,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    };
    
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
    return true;
  } catch (error) {
    console.error('Error saving consent to localStorage:', error);
    return false;
  }
}

// Check if user has given consent for a specific category
export function hasConsent(category) {
  const consent = getStoredConsent();
  if (!consent) return false;
  
  return consent[category] === true;
}

// Check if any consent has been given
export function hasAnyConsent() {
  return getStoredConsent() !== null;
}

// Clear all consent data
export function clearConsent() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing consent from localStorage:', error);
    return false;
  }
}

// Check if analytics consent is given
export function hasAnalyticsConsent() {
  return hasConsent('analytics');
}

// Check if marketing consent is given
export function hasMarketingConsent() {
  return hasConsent('marketing');
}

// Get consent status for all categories
export function getConsentStatus() {
  const consent = getStoredConsent();
  return consent ? { ...DEFAULT_CONSENT, ...consent } : DEFAULT_CONSENT;
}
