<template>
  <section class="section section-1" id="section-1">
    <img 
      src="@/assets/logo/layerz-logo.png" 
      alt="LayerZ Logo" 
      class="logo"
    />
    <TextSlider 
      :slides="heroSlides" 
      :interval="5000"
      @slide-change="onSlideChange"
    />
  </section>
</template>

<script>
import TextSlider from './TextSlider.vue'

export default {
  name: 'SectionOne',
  components: {
    TextSlider
  },
  data() {
    return {
      heroSlides: [
        'Taking Customer Experiences,<br>level to another <span class="highlight">level</span>',
        'We believe <span class="highlight">online</span><br>experiences should feel as<br><span class="highlight">personal</span> & <span class="highlight">timely</span> as those in<br>a real shop',
        'Create <span class="highlight">engaging</span> digital<br>journeys that convert<br>visitors into <span class="highlight">customers</span>'
      ]
    }
  },
  methods: {
    onSlideChange(slideIndex) {
      // Handle slide change if needed
      console.log('Current slide:', slideIndex);
    }
  }
}
</script>

<style scoped>
.section {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.section-1 {
    background-color: #270972; /* Indigo */
    background-image: url('@/assets/bg/bg-pattern.png');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    padding: 0px 80px;
}

.logo {
    position: absolute;
    top: 80px;
    left: 80px;
    height: 223px;
    width: auto;
    z-index: 10;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .section-1 {
        background-size: auto 80%;
        background-position: right top;
        padding: 0px 40px;
    }
    
    .logo {
        top: 40px;
        left: 40px;
        height: 150px;
    }
}

@media (max-width: 480px) {
    .section-1 {
        background-size: auto 60%;
        background-position: center right;
        padding: 0px 20px;
    }
    
    .logo {
        top: 20px;
        left: 20px;
        height: 100px;
    }
}
</style>
