<template>
  <div class="terms-of-service">
    <!-- Page Header -->
    <div class="header">
      <div class="container">
        <h1>Terms of Service</h1>
        <p>Layer Z Platform by Herragen A.G.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <div class="content">
        <div class="last-updated">
          <strong>Last Updated:</strong> June 19, 2025<br>
          <strong>Effective Date:</strong> June 19, 2025
        </div>

        <div class="toc">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#introduction">1. Introduction</a></li>
            <li><a href="#acceptance">2. Acceptance of Terms</a></li>
            <li><a href="#description">3. Service Description</a></li>
            <li><a href="#eligibility">4. Eligibility</a></li>
            <li><a href="#account">5. Account Registration</a></li>
            <li><a href="#usage">6. Acceptable Use</a></li>
            <li><a href="#intellectual-property">7. Intellectual Property</a></li>
            <li><a href="#privacy">8. Privacy Policy</a></li>
            <li><a href="#payment">9. Payment Terms</a></li>
            <li><a href="#termination">10. Termination</a></li>
            <li><a href="#disclaimers">11. Disclaimers</a></li>
            <li><a href="#limitation">12. Limitation of Liability</a></li>
            <li><a href="#governing-law">13. Governing Law</a></li>
            <li><a href="#contact">14. Contact Information</a></li>
          </ul>
        </div>

        <section id="introduction" class="section">
          <h2>1. Introduction</h2>
          <p>Welcome to Layer Z, a digital experience platform provided by Herragen A.G. These Terms of Service ("Terms") govern your access to and use of the Layer Z platform and related services.</p>
          
          <div class="highlight-box">
            <strong>Quick Summary:</strong>
            <ul>
              <li>These terms govern your use of Layer Z</li>
              <li>You must comply with our acceptable use policy</li>
              <li>We provide the service "as is" with certain warranties</li>
              <li>Swiss law governs these terms</li>
            </ul>
          </div>
        </section>

        <div class="load-full-terms">
          <p><em>This is a condensed view. For the complete terms of service, please visit our 
          <router-link to="/terms-of-service.html">full terms page</router-link>.</em></p>
        </div>
      </div>
    </div>

    <button class="scroll-top" @click="scrollToTop" :class="{ visible: showScrollTop }" title="Back to top">↑</button>
  </div>
</template>

<script>
export default {
  name: 'TermsOfService',
  data() {
    return {
      showScrollTop: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    this.setupSmoothScrolling()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.showScrollTop = window.pageYOffset > 300
    },
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.querySelector(anchor.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.terms-of-service {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
}

.header {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content {
  background: white;
  margin: 3rem auto 3rem;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.last-updated {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #ff6b6b;
}

.toc {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.toc h3 {
  margin-bottom: 1rem;
  color: #ff6b6b;
}

.toc ul {
  list-style: none;
}

.toc li {
  margin-bottom: 0.5rem;
}

.toc a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}

.toc a:hover {
  color: #ff6b6b;
}

.section {
  margin-bottom: 3rem;
  scroll-margin-top: 2rem;
}

.section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ff6b6b;
}

.highlight-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.load-full-terms {
  text-align: center;
  padding: 2rem;
  background: #e8f5e8;
  border-radius: 8px;
  margin-top: 2rem;
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  background: #e74c3c;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .content {
    padding: 2rem 1.5rem;
    margin: -2rem auto 2rem;
  }

  .header h1 {
    font-size: 2rem;
  }
}
</style>
