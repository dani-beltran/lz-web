<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="{ 
      transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
      width: `${slides.length * 100}%`
    }">
      <div class="slide" 
           v-for="(slide, index) in slides" 
           :key="index"
           :style="{ flexBasis: slideWidth }">
        <h1 v-html="slide"></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextSlider',
  props: {
    slides: {
      type: Array,
      required: true,
      default: () => []
    },
    interval: {
      type: Number,
      default: 10000 // 10 seconds
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null
    }
  },
  computed: {
    slideWidth() {
      return `${100 / this.slides.length}%`;
    }
  },
  mounted() {
    if (this.autoPlay) {
      this.startSlider();
    }
  },
  beforeUnmount() {
    this.stopSlider();
  },
  watch: {
    autoPlay(newVal) {
      if (newVal) {
        this.startSlider();
      } else {
        this.stopSlider();
      }
    }
  },
  methods: {
    startSlider() {
      if (this.slides.length <= 1) return;
      
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stopSlider() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
        this.slideInterval = null;
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.$emit('slide-change', this.currentSlide);
    },
    goToSlide(index) {
      if (index >= 0 && index < this.slides.length) {
        this.currentSlide = index;
        this.$emit('slide-change', this.currentSlide);
      }
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
      this.$emit('slide-change', this.currentSlide);
    }
  }
}
</script>

<style scoped>
.slider-container {
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    position: relative;
}

.slider-wrapper {
    display: flex;
    transition: transform 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.slide h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: white;
    text-align: center;
    max-width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .slide h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .slide h1 {
        font-size: 1.8rem;
    }
}
</style>
