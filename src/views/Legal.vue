<template>
  <div class="legal-hub">
    <div class="container">
      <div class="legal-content">
        <div class="logo-section">
          <img src="@/assets/logo/layerz-logo-black.svg"alt="Layer Z Logo" class="logo-img">
          <h1>Layer Z</h1>
          <p>Legal Information Hub</p>
        </div>

        <div class="last-updated">
          <strong>📅 Last Updated:</strong> June 19, 2025<br>
          All legal documents are current and compliant with Swiss and EU regulations.
        </div>

        <div class="legal-grid">
          <div class="legal-card">
            <div class="icon">📋</div>
            <h3>Terms of Service</h3>
            <p>Our terms of service outline the rules and regulations for using the Layer Z platform. This includes user responsibilities, acceptable use policies, payment terms, and service limitations.</p>
            <router-link to="/terms-of-service" class="btn">Read Terms of Service</router-link>
          </div>

          <div class="legal-card">
            <div class="icon">🔒</div>
            <h3>Privacy Policy</h3>
            <p>Our privacy policy explains how we collect, use, and protect your personal data. We are committed to transparency and compliance with GDPR, Swiss FADP, and other privacy regulations.</p>
            <router-link to="/privacy-policy" class="btn">Read Privacy Policy</router-link>
          </div>
        </div>

        <div class="company-info">
          <h3>🏢 Company Information</h3>
          <p><strong>Herragen A.G.</strong> is a Swiss technology company specializing in digital experience platforms. We are committed to providing transparent, secure, and compliant services to our customers worldwide.</p>
          
          <div class="contact-grid">
            <div class="contact-item">
              <h4>Registered Address</h4>
              <p>Brandrain 1<br>8707 Uetikon am See, Switzerland</p>
            </div>
            
            <div class="contact-item">
              <h4>Registration</h4>
              <p>CHE-492.826.814<br>Swiss Commercial Register</p>
            </div>
            
            <div class="contact-item">
              <h4>Legal Inquiries</h4>
              <p>support@herragen.com<br>Mike Rogers</p>
            </div>
            
            <div class="contact-item">
              <h4>Privacy Officer</h4>
              <p>support@herragen.com<br>Mike Rogers</p>
            </div>
          </div>
        </div>

        <div class="legal-grid">
          <div class="legal-card">
            <div class="icon">🍪</div>
            <h3>Cookie Policy</h3>
            <p>Learn about how we use cookies and similar tracking technologies. Manage your cookie preferences and understand your choices regarding data collection.</p>
            <router-link to="/cookie-policy" class="btn">Read Cookie Policy</router-link>
          </div>

          <!-- Hidden until implemented -->
          <div class="legal-card" style="display: none;">
            <div class="icon">🛡️</div>
            <h3>Security Information</h3>
            <p>Information about our security practices, data protection measures, and how we keep your information safe. Includes our security certifications and compliance standards.</p>
            <router-link to="#security" class="btn">Security Details</router-link>
          </div>
        </div>

        <div class="footer-note">
          <p><strong>Compliance:</strong> Herragen A.G. operates under Swiss law and complies with international standards including GDPR (EU), CCPA (California), and Swiss Federal Act on Data Protection (FADP).</p>
          <p><strong>Languages:</strong> This legal information is available in English<span style="display: none;">, German, French, and Italian. In case of discrepancies, the English version shall prevail.</span></p>
          <p><strong>Contact:</strong> For legal questions or concerns, please contact our legal department at support@herragen.com</p>
        </div>
      </div>
    </div>

    <button class="scroll-top" @click="scrollToTop" :class="{ visible: showScrollTop }" title="Back to top">↑</button>
  </div>
</template>

<script>
export default {
  name: 'Legal',
  data() {
    return {
      showScrollTop: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    this.setupInteractiveEffects()
    this.setupKeyboardNavigation()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.showScrollTop = window.pageYOffset > 300
    },
    setupInteractiveEffects() {
      // Add interactive effects to cards
      this.$nextTick(() => {
        const cards = document.querySelectorAll('.legal-card')
        
        cards.forEach(card => {
          card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)'
          })
          
          card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)'
          })
        })
      })
    },
    setupKeyboardNavigation() {
      this.handleKeydown = (e) => {
        if (e.key === 'Escape') {
          // Close any modals or return to main site
          this.$router.go(-1)
        }
      }
      window.addEventListener('keydown', this.handleKeydown)
    },
  }
}
</script>

<style scoped>
.legal-hub {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.legal-content {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo-section {
  margin-bottom: 2rem;
}

.logo-section .logo-img {
  max-height: 80px;
  width: auto;
  margin-bottom: 0.5rem;
}

.logo-section h1 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  display: none; /* Hidden when logo image is used */
}

.logo-section p {
  color: #6b7280;
  font-size: 1.1rem;
}

.last-updated {
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}

.legal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.legal-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.legal-card:hover {
  transform: translateY(-5px);
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
}

.legal-card .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.legal-card h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.legal-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  text-align: left;
}

.legal-card .btn {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.legal-card .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.company-info {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
}

.company-info h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.company-info p {
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.contact-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

.contact-item h4 {
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
}

.contact-item p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-note {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  color: #9ca3af;
  font-size: 0.85rem;
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .legal-content {
    padding: 2rem 1.5rem;
  }

  .logo-section .logo-img {
    max-height: 60px;
  }

  .logo-section h1 {
    font-size: 2rem;
  }

  .legal-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
