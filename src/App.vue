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
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'
import SectionFour from './components/SectionFour.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    FooterComponent
  }
}
</script>

<style>
/* Import the main CSS */
@import './assets/css/style.css';
</style>
