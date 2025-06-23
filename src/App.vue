<template>
  <main role="main" id="main-content">
    <!-- Main Router View -->
    <router-view />
  </main>

  <!-- Global Components -->
  <FooterComponent />

  <!-- Cookie Consent Modal -->
  <CookieConsent @consent-given="handleConsentGiven" />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import CookieConsent from "./components/CookieConsent.vue";
import { reinitializeAnalytics } from "./utils/analytics.js";
import { hasAnyConsent, hasAnalyticsConsent } from "./utils/cookieConsent.js";

export default {
  name: "App",
  components: {
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
  },
};
</script>

<style>
/* Import the main CSS */
@import "./assets/css/index.css";
</style>
