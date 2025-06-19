<template>
  <div class="not-found">
    <!-- Floating background elements -->
    <div class="floating-elements">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
    </div>

    <div class="container">
      <!-- LayerZ Logo -->
      <img src="@/assets/logo/layerz-logo.png" alt="LayerZ Logo" class="logo" />

      <!-- Error Code -->
      <div class="error-code">404</div>
      
      <!-- Error Title -->
      <h1 class="error-title">Page <span class="highlight">Not Found</span></h1>
      
      <!-- Error Message -->
      <p class="error-message">
        Oops! The page you're looking for seems to have vanished into another layer. 
        Don't worry, we'll help you get back on track.
      </p>
      
      <!-- Action Buttons -->
      <div class="actions">
        <router-link to="/" class="btn btn-primary">
          🏠 Go Home
        </router-link>
        <button @click="goBack" class="btn btn-secondary">
          ← Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    // Track 404 errors for analytics (if analytics is enabled)
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `404 - Page not found: ${window.location.pathname}`,
        fatal: false
      })
    }
    this.setupKeyboardNavigation()
    this.addConsoleEasterEgg()
  },
  beforeUnmount() {
    if (this.keydownHandler) {
      document.removeEventListener('keydown', this.keydownHandler)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    setupKeyboardNavigation() {
      // Add keyboard navigation
      this.keydownHandler = (e) => {
        if (e.key === 'Escape' || e.key === 'Backspace') {
          this.$router.go(-1)
        } else if (e.key === 'Enter' || e.key === 'Home') {
          this.$router.push('/')
        }
      }
      document.addEventListener('keydown', this.keydownHandler)
    },
    addConsoleEasterEgg() {
      // Add console easter egg
      console.log('%cLayerZ 404 Page', 'color: #270972; font-size: 20px; font-weight: bold;')
      console.log('%cLooks like you found a page that doesn\'t exist! 🚀', 'color: #666; font-size: 14px;')
    }
  }
}
</script>

<style scoped>
.not-found {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #270972 0%, #1e0654 100%);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 600px;
  width: 100%;
  animation: fadeInUp 0.8s ease-out;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 40px;
  opacity: 0.9;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  line-height: 1;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
}

.error-message {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.highlight {
  background: linear-gradient(90deg, #ff6b9d, #c471f5, #12c2e9);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

.actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
  justify-content: center;
  font-family: inherit;
}

.btn-primary {
  background-color: #ffffff;
  color: #270972;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.floating-element {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.floating-element:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.floating-element:nth-child(4) {
  width: 100px;
  height: 100px;
  bottom: 15%;
  right: 10%;
  animation-delay: 1s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-message {
    font-size: 1rem;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }

  .logo {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 4.5rem;
  }

  .error-title {
    font-size: 1.5rem;
  }

  .container {
    padding: 0 10px;
  }
}
</style>
