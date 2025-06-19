<template>
  <div class="slider-container"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       @mousedown="handleMouseDown"
       @mousemove="handleMouseMove"
       @mouseup="handleMouseUp"
       @mouseleave="handleMouseUp">
    <div class="slider-wrapper" :style="{ 
      transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
      width: `${slides.length * 100}%`
    }">
      <div class="slide" 
           v-for="(slide, index) in slides" 
           :key="index"
           :style="{ flexBasis: slideWidth }">
        <h1 class="supertitle" v-html="slide"></h1>
      </div>
    </div>
    
    <!-- Dots Navigation -->
    <div class="dots-container">
      <button 
        v-for="(slide, index) in slides"
        :key="`dot-${index}`"
        class="dot"
        :class="{ 'active': currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
import { useSwipe } from '@/composables/useSwipe.js'

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
  setup(props) {
    // Initialize swipe functionality
    const swipeHandlers = useSwipe({
      threshold: 50
    })

    return {
      ...swipeHandlers
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
    
    // Update swipe callbacks after component is mounted
    this.updateCallbacks({
      onSwipeLeft: () => {
        this.nextSlide();
        if (this.autoPlay) {
          this.stopSlider();
          this.startSlider();
        }
      },
      onSwipeRight: () => {
        this.prevSlide();
        if (this.autoPlay) {
          this.stopSlider();
          this.startSlider();
        }
      }
    });
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
        
        // Restart auto-play timer when user manually navigates
        if (this.autoPlay) {
          this.stopSlider();
          this.startSlider();
        }
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
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.slider-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 0 80px;
    width: 100%;
    height: 100%;
}

/* Dots Navigation */
.dots-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 40px 80px;
  flex-shrink: 0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  border-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

.dot.active {
  background-color: #ffffff;
  border-color: #ffffff;
  transform: scale(1.2);
}

.dot:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

/* Responsive adjustments */
@media (max-width: 1280px) {
    .slide {
        padding: 0 40px;
    }

    .dots-container {
        padding: 20px 40px;
        margin-top: 30px;
    }
}

@media (max-width: 768px) {
    .slide {
        padding: 0 20px;
    }

    .dots-container {
        gap: 10px;
    }
    
    .dot {
        width: 10px;
        height: 10px;
    }
}
</style>
