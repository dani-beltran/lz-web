import emailjs from "@emailjs/browser";

class EmailService {
  constructor() {
    this.isInitialized = false;
    this.config = {
      publicKey: "bYS8rZcjxAnKFuQCQ",
      serviceId: "service_glm7r3f",
      templateId: "template_wwopw9n"
    };
  }

  /**
   * Initialize EmailJS with public key
   */
  init() {
    if (!this.isInitialized) {
      emailjs.init({
        publicKey: this.config.publicKey,
      });
      this.isInitialized = true;
    }
  }

  /**
   * Send contact form data via EmailJS
   * @param {Object} formData - The form data to send
   * @param {string} formData.name - User's full name
   * @param {string} formData.email - User's email address
   * @param {string} formData.subject - Email subject
   * @param {string} formData.message - Email message
   * @returns {Promise} - EmailJS send promise
   */
  async sendContactForm(formData) {
    // Ensure EmailJS is initialized
    this.init();

    // Prepare email template parameters
    const templateParams = {
      ...formData,
      time: new Date().toISOString(),
    };

    try {
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      return {
        success: true,
        response,
        data: formData
      };
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error(`Email sending failed: ${error.message || error}`);
    }
  }

  /**
   * Send custom email with different template
   * @param {string} serviceId - EmailJS service ID
   * @param {string} templateId - EmailJS template ID
   * @param {Object} templateParams - Template parameters
   * @returns {Promise} - EmailJS send promise
   */
  async sendCustomEmail(serviceId, templateId, templateParams) {
    this.init();

    try {
      const response = await emailjs.send(serviceId, templateId, {
        ...templateParams,
        time: new Date().toISOString(),
      });
      
      console.log('Custom email sent successfully:', response);
      return {
        success: true,
        response,
        data: templateParams
      };
    } catch (error) {
      console.error('Failed to send custom email:', error);
      throw new Error(`Email sending failed: ${error.message || error}`);
    }
  }

  /**
   * Update configuration
   * @param {Object} newConfig - New configuration object
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    // Reset initialization to force re-init with new config
    this.isInitialized = false;
  }
}

// Create and export a singleton instance
export const emailService = new EmailService();

// Export the class for testing or multiple instances
export { EmailService };
