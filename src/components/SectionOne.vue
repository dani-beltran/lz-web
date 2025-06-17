<template>
  <section class="section section-1" id="section-1">
    <div class="header">
      <div class="logo-container">
        <img
          src="@/assets/logo/layerz-logo.png"
          alt="LayerZ Logo"
          class="logo"
        />
      </div>
      <div class="button-container">
        <button class="get-started-btn" @click="redirectToDashboard">
          Get Started
        </button>
      </div>
    </div>
    <div class="slider-content">
      <TextSlider
        class="text-slider"
        :slides="heroSlides"
        :interval="8000"
        @slide-change="onSlideChange"
      />
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
      window.open("https://dashboard.layerz.com/sign-up", "_blank");
    },
  },
};
</script>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo-container {
  margin: 60px 80px 0 80px;
  z-index: 10;
}

.logo {
  height: 124px;
  width: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.button-container {
  margin: 60px 80px 0 0;
}

.get-started-btn {
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

  .logo-container {
    margin: 30px 40px 0 40px;
  }

  .logo {
    height: 92px;
  }

  .button-container {
    margin: 30px 40px 0 0;
  }
}

@media (max-width: 768px) {
  .section-1 {
    background-size: auto 50%;
    background-position: bottom right;
    background-position-x: calc(100% + 40px);
  }

  .logo-container {
    margin: 15px 20px 0 20px;
  }

  .logo {
    height: 92px;
  }

  .button-container {
    margin: 15px 20px 0 20px;
  }
}

@media (max-width: 480px) {
  .logo {
    height: 66px;
  }
  .header { 
    flex-direction: column;
    align-items: start;
  }

  .button-container {
    display: none;
  }
}
</style>
