<template>
  <div class="legal-hub">
    <!-- Page Header -->
    <div class="header">
      <div class="container">
        <div class="logo-section">
          <img src="https://lz-assets.s3.eu-west-1.amazonaws.com/logo-white.svg" alt="Layer Z Logo" class="logo">
          <h1>Legal Hub</h1>
        </div>
        <p>All legal information for Layer Z platform by Herragen A.G.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <div class="content">
        <div class="intro-section">
          <h2>Welcome to our Legal Information Center</h2>
          <p>Here you'll find all the legal documents and policies that govern your use of the Layer Z platform. We believe in transparency and want to ensure you understand how we operate and protect your data.</p>
        </div>

        <div class="legal-documents">
          <div class="document-grid">
            <div class="document-card">
              <div class="card-icon">📋</div>
              <h3>Privacy Policy</h3>
              <p>Learn how we collect, use, and protect your personal data in accordance with GDPR and Swiss data protection laws.</p>
              <router-link to="/privacy-policy" class="btn btn-primary">Read Privacy Policy</router-link>
            </div>

            <div class="document-card">
              <div class="card-icon">📝</div>
              <h3>Terms of Service</h3>
              <p>Review the terms and conditions that govern your use of the Layer Z platform and services.</p>
              <router-link to="/terms-of-service" class="btn btn-primary">Read Terms of Service</router-link>
            </div>

            <div class="document-card">
              <div class="card-icon">🍪</div>
              <h3>Cookie Policy</h3>
              <p>Understand how we use cookies and similar technologies to improve your browsing experience.</p>
              <router-link to="/cookie-policy" class="btn btn-primary">Read Cookie Policy</router-link>
            </div>
          </div>
        </div>

        <div class="company-info">
          <h2>Company Information</h2>
          <div class="info-grid">
            <div class="info-card">
              <h4>Herragen A.G.</h4>
              <p>
                <strong>Address:</strong> Brandrain 1, 8707 Uetikon am See, Switzerland<br>
                <strong>Commercial Register:</strong> CHE-492.826.814<br>
                <strong>Email:</strong> <a href="mailto:hello@herragen.com">hello@herragen.com</a><br>
                <strong>Website:</strong> <a href="https://herragen.com" target="_blank">herragen.com</a>
              </p>
            </div>

            <div class="info-card">
              <h4>Data Protection Officer</h4>
              <p>
                <strong>Name:</strong> Dr. Sarah Müller<br>
                <strong>Email:</strong> <a href="mailto:dpo@herragen.ch">dpo@herragen.ch</a><br>
                <strong>Phone:</strong> +41 44 123 45 68
              </p>
            </div>
          </div>
        </div>

        <div class="compliance-section">
          <h2>Legal Compliance</h2>
          <div class="compliance-grid">
            <div class="compliance-item">
              <h4>🇨🇭 Swiss Law</h4>
              <p>Operating under Swiss jurisdiction and Federal Act on Data Protection (FADP)</p>
            </div>
            <div class="compliance-item">
              <h4>🇪🇺 GDPR Compliant</h4>
              <p>Full compliance with European Union General Data Protection Regulation</p>
            </div>
            <div class="compliance-item">
              <h4>🔒 Security Standards</h4>
              <p>Industry-standard security measures and regular compliance audits</p>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <h2>Legal Questions?</h2>
          <p>If you have any questions about our legal policies or need clarification on any legal matters, please don't hesitate to contact us:</p>
          
          <div class="contact-options">
            <a href="mailto:legal@herragen.ch" class="contact-btn">
              📧 legal@herragen.ch
            </a>
            <a href="mailto:dpo@herragen.ch" class="contact-btn">
              🛡️ Data Protection Officer
            </a>
          </div>
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
    }
  }
}
</script>

<style scoped>
.legal-hub {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
}

.header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo {
  height: 50px;
  margin-right: 1rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.container {
  max-width: 1000px;
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

.intro-section {
  text-align: center;
  margin-bottom: 3rem;
}

.intro-section h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.document-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.document-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.document-card:hover {
  border-color: #3498db;
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(52, 152, 219, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.document-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.company-info, .compliance-section, .contact-section {
  margin: 3rem 0;
  padding: 2rem 0;
  border-top: 1px solid #e9ecef;
}

.company-info h2, .compliance-section h2, .contact-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.info-card h4 {
  color: #3498db;
  margin-bottom: 1rem;
}

.compliance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.compliance-item {
  text-align: center;
  padding: 1.5rem;
}

.compliance-item h4 {
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.contact-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.contact-btn {
  background: #27ae60;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.contact-btn:hover {
  background: #219a52;
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.scroll-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-top:hover {
  background: #2980b9;
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

  .logo-section {
    flex-direction: column;
  }

  .logo {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .document-grid {
    grid-template-columns: 1fr;
  }

  .contact-options {
    flex-direction: column;
    align-items: center;
  }
}
</style>
