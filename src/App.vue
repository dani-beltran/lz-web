<template>
  <div id="app">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <FooterComponent />
  </div>
</template>

<script>
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue";
import SectionFour from "./components/SectionFour.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { initGA, trackPageView, setupScrollTracking } from "./utils/analytics.js";

export default {
  name: "App",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    FooterComponent,
  },
  mounted() {
    // Initialize Google Analytics when the app is mounted
    initGA();
    
    // Track the initial page view
    trackPageView(window.location.pathname, document.title);
    
    // Set up scroll depth tracking
    setupScrollTracking();
  },
};
</script>

<style>
/* Import the main CSS */
@import "./assets/css/style.css";
</style>
