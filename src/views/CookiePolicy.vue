<template>
  <div class="cookie-policy">
    <!-- Page Header -->
    <div class="header">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1>🍪 Cookie Policy</h1>
            <p>Layer Z Platform by Herragen A.G.</p>
          </div>
          <div class="navigation-section">
            <router-link to="/" class="back-to-home-btn">
              ← Back to Home
            </router-link>
          </div>
        </div>
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
            <li><a href="#what-are-cookies">2. What Are Cookies?</a></li>
            <li><a href="#cookies-we-use">3. Cookies We Use</a></li>
            <li><a href="#purpose-of-cookies">4. Purpose of Our Cookies</a></li>
            <li><a href="#third-party-cookies">5. Third-Party Cookies</a></li>
            <li><a href="#cookie-consent">6. Cookie Consent</a></li>
            <li><a href="#managing-cookies">7. Managing Your Cookie Preferences</a></li>
            <li><a href="#browser-settings">8. Browser Settings</a></li>
            <li><a href="#cookie-alternatives">9. Alternatives to Cookies</a></li>
            <li><a href="#updates">10. Updates to This Policy</a></li>
            <li><a href="#contact">11. Contact Information</a></li>
          </ul>
        </div>

        <section id="introduction" class="section">
          <h2>1. Introduction</h2>
          <p>This Cookie Policy explains how Herragen A.G. ("we," "our," or "us") uses cookies and similar tracking technologies on our Layer Z platform and website (collectively, the "Service").</p>
          
          <p>This policy should be read alongside our <router-link to="/privacy-policy">Privacy Policy</router-link> and <router-link to="/terms-of-service">Terms of Service</router-link>, which provide additional information about how we collect, use, and protect your personal data.</p>

          <div class="highlight-box">
            <strong>🍪 Quick Summary:</strong>
            <ul>
              <li>We use cookies to improve your experience and analyze usage</li>
              <li>You can control most cookies through our consent banner</li>
              <li>Essential cookies are necessary for the platform to function</li>
              <li>You can manage cookies through your browser settings</li>
            </ul>
          </div>
        </section>

        <section id="what-are-cookies" class="section">
          <h2>2. What Are Cookies?</h2>
          
          <h3>2.1 Definition</h3>
          <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>

          <h3>2.2 Types of Cookies</h3>
          <p>Cookies can be classified in several ways:</p>
          
          <h4>By Ownership:</h4>
          <ul>
            <li><strong>First-party cookies:</strong> Set by Layer Z directly</li>
            <li><strong>Third-party cookies:</strong> Set by external services we use</li>
          </ul>

          <h4>By Duration:</h4>
          <ul>
            <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent cookies:</strong> Remain on your device for a set period</li>
          </ul>

          <h4>By Purpose:</h4>
          <ul>
            <li><strong>Essential cookies:</strong> Necessary for basic functionality</li>
            <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Analytics cookies:</strong> Collect data on how you use our site</li>
            <!-- <li><strong>Marketing cookies:</strong> Used for advertising and tracking</li> -->
          </ul>

          <div class="cookie-example">
            <strong>Example Cookie:</strong><br>
            Name: layerz_session<br>
            Value: abc123def456<br>
            Domain: layerz.com<br>
            Expires: Session<br>
            Purpose: Maintain user authentication
          </div>
        </section>

        <section id="cookies-we-use" class="section">
          <h2>3. Cookies We Use</h2>
          
          <p>The following table details the specific cookies used by Layer Z:</p>

          <table class="data-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Purpose</th>
                <th>Consent Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>layerz_session</td>
                <td>Essential</td>
                <td>Session</td>
                <td>User authentication and session management</td>
                <td>No</td>
              </tr>
              <tr>
                <td>layerz_csrf</td>
                <td>Essential</td>
                <td>Session</td>
                <td>Security - prevents CSRF attacks</td>
                <td>No</td>
              </tr>
              <tr>
                <td>layerz_preferences</td>
                <td>Functional</td>
                <td>1 year</td>
                <td>Remember user interface preferences</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>layerz_language</td>
                <td>Functional</td>
                <td>1 year</td>
                <td>Remember selected language</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>cookie-consent</td>
                <td>Essential</td>
                <td>1 year</td>
                <td>Store cookie consent preferences</td>
                <td>No</td>
              </tr>
              <tr>
                <td>_ga</td>
                <td>Analytics</td>
                <td>2 years</td>
                <td>Google Analytics - distinguish users</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Analytics</td>
                <td>2 years</td>
                <td>Google Analytics - collect analytics data</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="purpose-of-cookies" class="section">
          <h2>4. Purpose of Our Cookies</h2>
          
          <h3>4.1 Essential Cookies</h3>
          <p>These cookies are strictly necessary for Layer Z to function properly. They enable core functionality such as:</p>
          <ul>
            <li>User authentication and session management</li>
            <li>Security features and CSRF protection</li>
            <li>Load balancing and performance optimization</li>
            <li>Remember your cookie consent choices</li>
            <li>Basic functionality and navigation</li>
          </ul>
          <p><strong>Legal Basis:</strong> Legitimate interest (necessary for service provision)</p>

          <h3>4.2 Functional Cookies</h3>
          <p>These cookies enhance your experience by remembering your preferences:</p>
          <ul>
            <li>Language and region settings</li>
            <li>User interface preferences (theme, layout)</li>
            <li>Dashboard configurations</li>
            <li>Recently viewed items or searches</li>
            <li>Customer support chat history</li>
          </ul>
          <p><strong>Legal Basis:</strong> Consent</p>

          <h3>4.3 Analytics Cookies</h3>
          <p>These cookies help us understand how you use Layer Z to improve our service:</p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>User journey and navigation patterns</li>
            <li>Feature usage and adoption rates</li>
            <li>Error tracking and performance monitoring</li>
            <li>A/B testing and optimization</li>
          </ul>
          <p><strong>Legal Basis:</strong> Consent</p>
        </section>

        <!-- <h3>4.4 Marketing Cookies</h3>
                <p>These cookies are used for advertising and marketing purposes:</p>
                <ul>
                    <li>Track conversion from marketing campaigns</li>
                    <li>Personalize advertising content</li>
                    <li>Retargeting and remarketing</li>
                    <li>Social media integration and sharing</li>
                    <li>Affiliate program tracking</li>
                </ul>
                <p><strong>Legal Basis:</strong> Consent</p> -->

        <section id="third-party-cookies" class="section">
          <h2>5. Third-Party Cookies</h2>
          
          <p>Layer Z integrates with several third-party services that may set their own cookies:</p>

          <h3>5.1 Google Analytics</h3>
          <div class="contact-info">
            <h4>Service Provider: Google LLC</h4>
            <p><strong>Purpose:</strong> Website analytics and user behavior tracking<br>
            <strong>Data Collected:</strong> Page views, user interactions, device information<br>
            <strong>Retention:</strong> 26 months<br>
            <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</a><br>
            <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">Google Analytics Opt-out</a></p>
          </div>

          <h3>5.2 Stripe</h3>
          <div class="contact-info">
            <h4>Service Provider: Stripe, Inc.</h4>
            <p><strong>Purpose:</strong> Payment processing and fraud prevention<br>
            <strong>Data Collected:</strong> Payment information, transaction data<br>
            <strong>Retention:</strong> 7 years (regulatory compliance)<br>
            <strong>Privacy Policy:</strong> <a href="https://stripe.com/privacy" target="_blank">Stripe Privacy Policy</a></p>
          </div>
        </section>

        <section id="cookie-consent" class="section">
          <h2>6. Cookie Consent</h2>
          
          <h3>6.1 Consent Banner</h3>
          <p>When you first visit Layer Z, you'll see our cookie consent banner that allows you to:</p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject all non-essential cookies</li>
            <li>Customize your preferences by cookie category</li>
            <li>Learn more about each type of cookie</li>
          </ul>

          <div class="cookie-banner-demo">
            <strong>🍪 Example Consent Banner:</strong><br>
            "We use cookies to enhance your browsing experience and analyze our traffic. 
            <u>Customize preferences</u> or choose from the options below."<br>
            <br>
            [Reject All] [Accept All]
          </div>

          <h3>6.2 Granular Control</h3>
          <p>You can control different types of cookies separately:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Always active (cannot be disabled)</li>
            <li><strong>Functional Cookies:</strong> Optional (improves user experience)</li>
            <li><strong>Analytics Cookies:</strong> Optional (helps us improve the service)</li>
            <!-- <li><strong>Marketing Cookies:</strong> Optional (for advertising and retargeting)</li> -->
          </ul>

          <h3>6.3 Consent Management</h3>
          <p>Your consent choices are:</p>
          <ul>
            <li>Stored locally on your device</li>
            <li>Remembered for 12 months</li>
            <li>Applied across all Layer Z domains</li>
            <li>Can be changed at any time</li>
            <li>Reset if you clear your browser data</li>
          </ul>
        </section>

        <section id="managing-cookies" class="section">
          <h2>7. Managing Your Cookie Preferences</h2>
          
          <h3>7.1 Layer Z Cookie Settings</h3>
          <div class="cookie-controls">
            <strong>🔧 Manage Your Preferences:</strong>
            <ul>
              <li>Click the "Cookie Settings" link in our footer</li>
              <li>Visit your account privacy settings</li>
              <li>Use the cookie preferences center</li>
              <li>Contact our support team for assistance</li>
            </ul>
          </div>

          <h3>7.2 What Happens When You Disable Cookies</h3>
          <p>Disabling different types of cookies will have different effects:</p>

          <h4>Essential Cookies Disabled:</h4>
          <ul>
            <li>Layer Z may not function properly</li>
            <li>You may not be able to log in</li>
            <li>Security features may be compromised</li>
            <li>Some pages may not load correctly</li>
          </ul>

          <h4>Functional Cookies Disabled:</h4>
          <ul>
            <li>Your preferences won't be remembered</li>
            <li>You'll need to reset language/region each visit</li>
            <li>Customizations will be lost</li>
            <li>Chat support may be limited</li>
          </ul>

          <h4>Analytics Cookies Disabled:</h4>
          <ul>
            <li>Your usage won't be tracked for analytics</li>
            <li>You won't contribute to improvement insights</li>
            <li>No impact on functionality</li>
            <li>Privacy is enhanced</li>
          </ul>

          <!-- <h4>Marketing Cookies Disabled:</h4>
                <ul>
                    <li>You'll see less relevant advertisements</li>
                    <li>Retargeting campaigns won't work</li>
                    <li>Social media features may be limited</li>
                    <li>Marketing attribution will be affected</li>
                </ul> -->
        </section>

        <section id="browser-settings" class="section">
          <h2>8. Browser Settings</h2>
          
          <p>You can also control cookies through your browser settings. Here's how to manage cookies in popular browsers:</p>

          <div class="browser-instructions">
            <div class="browser-card">
              <h4><span class="icon">🌐</span>Google Chrome</h4>
              <ol>
                <li>Click the three dots menu → Settings</li>
                <li>Privacy and security → Cookies and other site data</li>
                <li>Choose your preferred setting</li>
                <li>Manage exceptions and blocked sites</li>
              </ol>
            </div>

            <div class="browser-card">
              <h4><span class="icon">🦊</span>Mozilla Firefox</h4>
              <ol>
                <li>Click the menu button → Options</li>
                <li>Privacy & Security panel</li>
                <li>Cookies and Site Data section</li>
                <li>Choose Standard, Strict, or Custom</li>
              </ol>
            </div>

            <div class="browser-card">
              <h4><span class="icon">🧭</span>Safari</h4>
              <ol>
                <li>Safari menu → Preferences</li>
                <li>Privacy tab</li>
                <li>Block all cookies or manage by website</li>
                <li>Prevent cross-site tracking</li>
              </ol>
            </div>

            <div class="browser-card">
              <h4><span class="icon">📘</span>Microsoft Edge</h4>
              <ol>
                <li>Three dots menu → Settings</li>
                <li>Cookies and site permissions</li>
                <li>Cookies and site data</li>
                <li>Block third-party cookies</li>
              </ol>
            </div>
          </div>

          <h3>8.1 Mobile Browsers</h3>
          <p>Cookie management on mobile devices:</p>
          <ul>
            <li><strong>iOS Safari:</strong> Settings → Safari → Privacy & Security</li>
            <li><strong>Android Chrome:</strong> Chrome menu → Settings → Site settings → Cookies</li>
            <li><strong>Mobile Firefox:</strong> Menu → Settings → Privacy → Cookies</li>
          </ul>

          <h3>8.2 Private/Incognito Mode</h3>
          <p>Most browsers offer private browsing modes that:</p>
          <ul>
            <li>Don't save cookies after the session ends</li>
            <li>Don't save browsing history</li>
            <li>Limit tracking by third parties</li>
            <li>Start with a clean slate each session</li>
          </ul>
        </section>

        <section id="cookie-alternatives" class="section">
          <h2>9. Alternatives to Cookies</h2>
          
          <h3>9.1 Similar Technologies</h3>
          <p>Besides cookies, we may use other tracking technologies:</p>

          <h4>Local Storage</h4>
          <ul>
            <li>Stores data locally in your browser</li>
            <li>Persists until manually cleared</li>
            <li>Used for application state and preferences</li>
            <li>Managed through browser developer tools</li>
          </ul>

          <h4>Session Storage</h4>
          <ul>
            <li>Temporary storage for the current session</li>
            <li>Cleared when tab is closed</li>
            <li>Used for temporary data and forms</li>
            <li>Enhances user experience</li>
          </ul>

          <h4>Web Beacons (Pixels)</h4>
          <ul>
            <li>Small transparent images</li>
            <li>Track email opens and page views</li>
            <li>Used in marketing communications</li>
            <li>Can be blocked by image blocking</li>
          </ul>

          <h4>Fingerprinting</h4>
          <ul>
            <li>Identifies devices by their characteristics</li>
            <li>Browser type, screen resolution, plugins</li>
            <li>We do not use fingerprinting techniques</li>
            <li>More difficult to control than cookies</li>
          </ul>

          <h3>9.2 Server-Side Analytics</h3>
          <p>We also collect some analytics data server-side:</p>
          <ul>
            <li>IP addresses (anonymized)</li>
            <li>User agent strings</li>
            <li>Referrer information</li>
            <li>Request logs and error tracking</li>
          </ul>
        </section>

        <section id="updates" class="section">
          <h2>10. Updates to This Policy</h2>
          
          <h3>10.1 Policy Changes</h3>
          <p>We may update this Cookie Policy to reflect:</p>
          <ul>
            <li>Changes in our cookie usage</li>
            <li>New third-party integrations</li>
            <li>Legal or regulatory requirements</li>
            <li>Improvements to our consent mechanisms</li>
          </ul>

          <h3>10.2 Notification Process</h3>
          <p>When we make significant changes:</p>
          <ul>
            <li>We'll update the "Last Updated" date</li>
            <li>Notify you through our platform</li>
            <li>Email notification for material changes</li>
            <li>Request new consent if required</li>
          </ul>

          <h3>10.3 Version History</h3>
          <p>Previous versions of this policy are available upon request. Contact our privacy team for historical versions.</p>
        </section>

        <section id="contact" class="section">
          <h2>11. Contact Information</h2>
          
          <h3>11.1 Cookie Questions</h3>
          <div class="contact-info">
            <h4>Privacy Team</h4>
            <p><strong>Email:</strong> support@layerz.com<br>
            <strong>Subject:</strong> "Cookie Policy Inquiry"<br>
            <strong>Response Time:</strong> Within 5 business days</p>
          </div>

          <h3>11.2 Technical Support</h3>
          <div class="contact-info">
            <h4>Cookie Technical Issues</h4>
            <p><strong>Email:</strong> support@layerz.com<br>
            <strong>Subject:</strong> "Cookie Technical Issue"<br>
            <strong>Response Time:</strong> Within 5 business days</p>
          </div>
        </section>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" @click="scrollToTop" :class="{ visible: showScrollTop }" title="Back to top">↑</button>
  </div>
</template>

<script>
export default {
  name: 'CookiePolicy',
  data() {
    return {
      showScrollTop: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    
    // Add keyboard navigation
    this.setupKeyboardNavigation()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.highlightCurrentSection)
    document.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.showScrollTop = window.pageYOffset > 300
    },
    
    setupKeyboardNavigation() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    handleKeyDown(e) {
      // Add keyboard navigation
      if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault()
        this.scrollToTop()
      }
    }
  }
}
</script>

<style scoped>
.cookie-policy {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fafafa;
}

.header {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
  position: relative;
}

.last-updated {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #f5576c;
}

.toc {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.toc h3 {
  margin-bottom: 1rem;
  color: #f5576c;
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
  color: #f5576c;
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
  border-bottom: 2px solid #f5576c;
}

.section h3 {
  color: #34495e;
  font-size: 1.3rem;
  margin: 1.5rem 0 0.8rem 0;
}

.section h4 {
  color: #34495e;
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem 0;
}

.section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.section ul, .section ol {
  margin: 1rem 0 1rem 2rem;
}

.section li {
  margin-bottom: 0.5rem;
}

.highlight-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.cookie-example {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.contact-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.contact-info h4 {
  color: #f5576c;
  margin-bottom: 1rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background: #f5576c;
  color: white;
  font-weight: 600;
}

.data-table tr:hover {
  background: #f8f9fa;
}

.cookie-controls {
  background: #e8f5e8;
  border: 1px solid #d4edda;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.browser-instructions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.browser-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e9ecef;
}

.browser-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.browser-card .icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.cookie-banner-demo {
  background: #1f2937;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #f5576c;
}

.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #f5576c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(245, 87, 108, 0.3);
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

/* Header Navigation Styles */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

.title-section {
  text-align: left;
}

.navigation-section {
  text-align: right;
}

.back-to-home-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.back-to-home-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Footer Navigation Styles */
.navigation-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
  text-align: center;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-btn.primary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.nav-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4);
}

.nav-btn.secondary {
  background: white;
  color: #6c757d;
  border-color: #dee2e6;
}

.nav-btn.secondary:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  color: #495057;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .content {
    padding: 2rem 1.5rem;
    margin: 2rem auto 2rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .title-section,
  .navigation-section {
    text-align: center;
  }

  .nav-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-btn {
    text-align: center;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .data-table {
    font-size: 0.9rem;
  }

  .data-table th,
  .data-table td {
    padding: 0.8rem;
  }

  .browser-instructions {
    grid-template-columns: 1fr;
  }
}
</style>
