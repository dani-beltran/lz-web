<template>
  <div class="not-found">
    <!-- Page Header -->
    <div class="header">
      <div class="container">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container">
      <div class="content">
        <div class="error-illustration">
          <div class="error-icon">🔍</div>
          <h2>Oops! Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div class="suggestions">
          <h3>What you can do:</h3>
          <ul>
            <li>Check the URL for typos</li>
            <li>Go back to the <router-link to="/">homepage</router-link></li>
            <li>Visit our <router-link to="/legal">Legal Hub</router-link></li>
            <li>Contact our support team if you think this is an error</li>
          </ul>
        </div>

        <div class="quick-links">
          <h3>Quick Links</h3>
          <div class="links-grid">
            <router-link to="/" class="quick-link">
              <span class="link-icon">🏠</span>
              <span>Home</span>
            </router-link>
            <router-link to="/privacy-policy" class="quick-link">
              <span class="link-icon">🔒</span>
              <span>Privacy Policy</span>
            </router-link>
            <router-link to="/terms-of-service" class="quick-link">
              <span class="link-icon">📝</span>
              <span>Terms of Service</span>
            </router-link>
            <router-link to="/legal" class="quick-link">
              <span class="link-icon">⚖️</span>
              <span>Legal Hub</span>
            </router-link>
          </div>
        </div>

        <div class="contact-support">
          <h3>Need Help?</h3>
          <p>If you believe this is an error or need assistance, please contact our support team:</p>
          <a href="mailto:support@herragen.ch" class="support-btn">Contact Support</a>
        </div>
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
  }
}
</script>

<style scoped>
.not-found {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.header h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header p {
  font-size: 1.5rem;
  opacity: 0.9;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content {
  background: white;
  margin: 3rem auto 3rem;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.error-illustration {
  margin-bottom: 3rem;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-illustration h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-illustration p {
  font-size: 1.1rem;
  color: #666;
}

.suggestions {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: left;
}

.suggestions h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.suggestions ul {
  list-style-position: inside;
}

.suggestions li {
  margin-bottom: 0.5rem;
}

.suggestions a {
  color: #3498db;
  text-decoration: none;
}

.suggestions a:hover {
  text-decoration: underline;
}

.quick-links {
  margin-bottom: 2rem;
}

.quick-links h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.quick-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.2s ease;
}

.quick-link:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.link-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-support {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 2rem;
}

.contact-support h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.support-btn {
  display: inline-block;
  background: #f39c12;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

.support-btn:hover {
  background: #e67e22;
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
    font-size: 3rem;
  }

  .header p {
    font-size: 1.2rem;
  }

  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
