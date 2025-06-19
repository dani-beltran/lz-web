<template>
  <div id="app">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <FooterComponent />
    
    <!-- Cookie Consent Modal -->
    <CookieConsent @consent-given="handleConsentGiven" ref="cookieConsent" />
  </div>
</template>

<script>
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue";
import SectionFour from "./components/SectionFour.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CookieConsent from "./components/CookieConsent.vue";
import { reinitializeAnalytics } from "./utils/analytics.js";
import { hasAnyConsent, hasAnalyticsConsent } from "./utils/cookieConsent.js";

export default {
  name: "App",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    FooterComponent,
    CookieConsent,
  },
  mounted() {
    // Check if user has already given consent
    if (hasAnyConsent() && hasAnalyticsConsent()) {
      // User has consented to analytics, initialize GA
      reinitializeAnalytics();
    }
  },
  methods: {
    handleConsentGiven(consent) {
      // Called when user gives/updates consent
      if (consent.analytics) {
        // User consented to analytics, initialize Google Analytics
        reinitializeAnalytics();
      }
    },
    
    // Method to show cookie settings (can be called from footer)
    showCookieSettings() {
      this.$refs.cookieConsent.showConsentModal();
    }
  },
};
</script>

<style>
/* Import the main CSS */
@import "./assets/css/style.css";
</style>
