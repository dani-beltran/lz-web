<template>
  <!-- Non-intrusive bottom banner -->
  <div v-if="showConsent && !showDetailedSettings" class="cookie-consent-banner">
    <div class="cookie-banner-content">
      <div class="cookie-banner-text">
        <h4>🍪 We use cookies</h4>
        <p>
          We use cookies to enhance your browsing experience and analyze our traffic. 
          <a href="#" @click.prevent="showDetailedSettings = true" class="settings-link">Customize preferences</a> 
          or choose from the options below.
        </p>
      </div>
      
      <div class="cookie-banner-actions">
        <button @click="rejectAll" class="btn btn-secondary">
          Reject All
        </button>
        <button @click="acceptAll" class="btn btn-primary">
          Accept All
        </button>
      </div>
    </div>
  </div>

  <!-- Detailed settings modal (shown when user clicks customize) -->
  <div v-if="showConsent && showDetailedSettings" class="cookie-consent-overlay">
    <div class="cookie-consent-modal">
      <div class="cookie-consent-header">
        <h3>Cookie Preferences</h3>
        <button @click="showDetailedSettings = false" class="close-button">×</button>
      </div>
      
      <div class="cookie-consent-content">
        <p>
          We use cookies and similar technologies to enhance your browsing experience, 
          analyze website traffic, and understand where our visitors are coming from. 
          This helps us improve our website and provide better content.
        </p>
        
        <div class="cookie-types">
          <div class="cookie-type">
            <div class="cookie-type-header">
              <input 
                type="checkbox" 
                id="necessary" 
                v-model="consent.necessary" 
                disabled
                checked
              />
              <label for="necessary">
                <strong>Necessary Cookies</strong>
                <span class="required">(Required)</span>
              </label>
            </div>
            <p class="cookie-description">
              These cookies are essential for the website to function properly. 
              They cannot be disabled.
            </p>
          </div>
          
          <div class="cookie-type">
            <div class="cookie-type-header">
              <input 
                type="checkbox" 
                id="analytics" 
                v-model="consent.analytics"
              />
              <label for="analytics">
                <strong>Analytics Cookies</strong>
              </label>
            </div>
            <p class="cookie-description">
              These cookies help us understand how visitors interact with our website 
              by collecting and reporting information anonymously.
            </p>
          </div>
          
          <div class="cookie-type">
            <div class="cookie-type-header">
              <input 
                type="checkbox" 
                id="marketing" 
                v-model="consent.marketing"
              />
              <label for="marketing">
                <strong>Marketing Cookies</strong>
              </label>
            </div>
            <p class="cookie-description">
              These cookies are used to track visitors across websites to display 
              relevant advertisements.
            </p>
          </div>
        </div>
      </div>
      
      <div class="cookie-consent-actions">
        <button 
          @click="rejectAll" 
          class="btn btn-secondary"
        >
          Reject All
        </button>
        <button 
          @click="acceptSelected" 
          class="btn btn-primary"
        >
          Save Preferences
        </button>
        <button 
          @click="acceptAll" 
          class="btn btn-success"
        >
          Accept All
        </button>
      </div>
      
      <div class="cookie-consent-footer">
        <p>
          You can change your preferences at any time by clicking the cookie settings 
          link in our footer. For more information, please read our 
          <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showConsent: false,
      showDetailedSettings: false,
      consent: {
        necessary: true,
        analytics: false,
        marketing: false
      }
    }
  },
  mounted() {
    this.checkConsentStatus();
  },
  methods: {
    checkConsentStatus() {
      const savedConsent = localStorage.getItem('cookie-consent');
      if (!savedConsent) {
        this.showConsent = true;
      } else {
        const consentData = JSON.parse(savedConsent);
        this.consent = { ...this.consent, ...consentData };
        this.$emit('consent-given', this.consent);
      }
    },
    
    acceptAll() {
      this.consent = {
        necessary: true,
        analytics: true,
        marketing: true
      };
      this.saveConsent();
    },
    
    rejectAll() {
      this.consent = {
        necessary: true,
        analytics: false,
        marketing: false
      };
      this.saveConsent();
    },
    
    acceptSelected() {
      this.saveConsent();
    },
    
    saveConsent() {
      const consentData = {
        ...this.consent,
        timestamp: new Date().toISOString(),
        version: '1.0'
      };
      
      localStorage.setItem('cookie-consent', JSON.stringify(consentData));
      this.showConsent = false;
      this.showDetailedSettings = false;
      this.$emit('consent-given', this.consent);
    },
    
    // Method to show consent modal again (for settings)
    showConsentModal() {
      this.showConsent = true;
      this.showDetailedSettings = true;
    }
  }
}
</script>

<style scoped>
/* Bottom banner styles */
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1f2937;
  color: white;
  z-index: 9999;
  border-top: 3px solid #5C95FF;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cookie-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.cookie-banner-text {
  flex: 1;
}

.cookie-banner-text h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.cookie-banner-text p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #d1d5db;
}

.settings-link {
  color: #60a5fa;
  text-decoration: underline;
  cursor: pointer;
}

.settings-link:hover {
  color: #93c5fd;
}

.cookie-banner-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

/* Modal overlay styles (unchanged but improved) */
.cookie-consent-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(2px);
}

.cookie-consent-modal {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.cookie-consent-header {
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cookie-consent-header h3 {
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: #374151;
  background: #f3f4f6;
}

.cookie-consent-content {
  padding: 24px;
}

.cookie-consent-content > p {
  margin: 0 0 24px 0;
  color: #4b5563;
  line-height: 1.6;
}

.cookie-type {
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
}

.cookie-type-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}

.cookie-type-header input[type="checkbox"] {
  margin-right: 12px;
  margin-top: 2px;
  width: 16px;
  height: 16px;
}

.cookie-type-header label {
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  color: #1f2937;
}

.required {
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: normal;
  margin-left: 8px;
}

.cookie-description {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-left: 28px;
}

.cookie-consent-actions {
  padding: 0 24px 24px 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  white-space: nowrap;
}

.cookie-banner-actions .btn {
  padding: 8px 16px;
  font-size: 0.85rem;
}

.cookie-consent-actions .btn {
  flex: 1;
  min-width: 120px;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.btn-primary {
  background: #5C95FF;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
}

.cookie-consent-footer {
  padding: 0 24px 24px 24px;
  border-top: 1px solid #e5e7eb;
  margin-top: 16px;
  padding-top: 16px;
}

.cookie-consent-footer p {
  margin: 0;
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.5;
}

.cookie-consent-footer a {
  color: #3b82f6;
  text-decoration: none;
}

.cookie-consent-footer a:hover {
  text-decoration: underline;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .cookie-banner-content {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px 20px;
  }
  
  .cookie-banner-actions {
    justify-content: center;
  }
  
  .cookie-consent-modal {
    width: 95%;
    margin: 20px;
  }
  
  .cookie-consent-actions {
    flex-direction: column;
  }
  
  .cookie-consent-actions .btn {
    width: 100%;
  }
  
  .cookie-banner-actions .btn {
    flex: 1;
  }
}

@media (max-width: 480px) {
  .cookie-banner-text h4 {
    font-size: 1rem;
  }
  
  .cookie-banner-text p {
    font-size: 0.85rem;
  }
  
  .cookie-banner-actions {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
