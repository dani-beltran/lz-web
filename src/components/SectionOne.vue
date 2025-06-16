<template>
  <section class="section section-1" id="section-1">
    <img src="@/assets/logo/layerz-logo.png" alt="LayerZ Logo" class="logo" />
    <div class="slider-content">
      <TextSlider
        class="text-slider"
        :slides="heroSlides"
        :interval="8000"
        @slide-change="onSlideChange"
      />
      <button class="get-started-btn" @click="redirectToDashboard">Get Started</button>
    </div>
  </section>
</template>

<script>
import TextSlider from "./TextSlider.vue";

export default {
  name: "SectionOne",
  components: {
    TextSlider,
  },
  data() {
    return {
      heroSlides: [
        'Taking Customer Experiences,<br>to another <span class="highlight">level</span>',
        'We believe <span class="highlight">online</span><br>experiences should feel as<br><span class="highlight">personal</span> & <span class="highlight">timely</span> as those in<br>a real shop',
        '<span class="highlight">However,</span><br>Online, most brands miss the <span class="highlight">moment</span><br>That\'s why we built <span class="highlight">LayerZ</span>',
        'Layer Z goes beyond <span class="highlight">personalisation</span>,<br>It connects through <span class="highlight">human-like</span><br>conversations, triggered by real<br><span class="highlight">behaviour</span>',
      ],
    };
  },
  methods: {
    onSlideChange(slideIndex) {
      // Handle slide change if needed
    },
    redirectToDashboard() {
      window.open('https://dashboard.layerz.com/sign-up', '_blank');
    },
  },
};
</script>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
}

.section-1 {
  background-color: #270972; /* Indigo */
  background-image: url("@/assets/bg/bg-pattern.png");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 100%;
}

.slider-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo {
  position: absolute;
  top: 60px;
  left: 80px;
  height: 150px;
  width: auto;
  z-index: 10;
}

.get-started-btn {
  position: absolute;
  top: 60px;
  right: 80px;
  background-color: #ffffff;
  color: #270972;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.get-started-btn:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.get-started-btn:active {
  transform: translateY(0);
}

/* Responsive adjustments for smaller screens */
@media (max-width: 1280px) {
  .section-1 {
    background-size: auto 60%;
    background-position: bottom right;
    background-position-x: calc(100% + 80px);
  }

  .logo {
    top: 30px;
    left: 40px;
    height: 150px;
  }

  .get-started-btn {
    top: 30px;
    right: 40px;
  }
}

@media (max-width: 768px) {
  .section-1 {
    background-size: auto 50%;
    background-position: bottom right;
    background-position-x: calc(100% + 40px);
  }

  .logo {
    top: 15px;
    left: 20px;
    height: 100px;
  }

  .get-started-btn {
    top: 15px;
    right: 20px;
  }

}

@media screen and (max-width: 480px) {

  .get-started-btn {
    top: 100vh;
    transform: translateY(-100%);
    margin-top: -20px;
    padding: 8px 16px;
    font-size: 0.875rem;
  }
}
</style>
