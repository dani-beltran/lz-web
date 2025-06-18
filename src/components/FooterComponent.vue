<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#about" @click.prevent="openModal">About Us</a></li>
          <li><a href="#careers" @click.prevent="openModal">Careers</a></li>
          <li><a href="#press" @click.prevent="openModal">Press</a></li>
          <li><a href="#blog" @click.prevent="openModal">Blog</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#help" @click.prevent="openModal">Help Center</a></li>
          <li><a href="#contact" @click.prevent="openModal">Contact Us</a></li>
          <li><a href="#faq" @click.prevent="openModal">FAQ</a></li>
          <li><a href="#status" @click.prevent="openModal">Service Status</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#terms" @click.prevent="openModal">Terms & Conditions</a></li>
          <li><a href="#privacy" @click.prevent="openModal">Privacy Policy</a></li>
          <li><a href="#cookies" @click.prevent="openModal">Cookie Policy</a></li>
          <li><a href="#disclaimer" @click.prevent="openModal">Disclaimer</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Connect</h4>
        <ul>
          <li><a href="#newsletter" @click.prevent="openModal">Newsletter</a></li>
          <li><a href="#community" @click.prevent="openModal">Community</a></li>
          <li><a href="#partners" @click.prevent="openModal">Partners</a></li>
          <li><a href="#developers" @click.prevent="openModal">Developers</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Herragen AG. All rights reserved.</p>
      <div class="social-links">
        <a href="https://x.com/layerz_com" aria-label="Twitter">
          <TwitterIcon :size="20" inverted />
        </a>
        <a href="https://www.linkedin.com/company/layerz-digitalexperience/" aria-label="LinkedIn">
          <LinkedinIcon :size="20" inverted />
        </a>
        <a href="https://www.youtube.com/@LayerZ-t6p" aria-label="YouTube">
          <!-- Making Youtube icon match its height with other icons resizing by its ratio -->
          <YouTubeIcon :size="Math.ceil(20 * (4 / 3))" inverted />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { onBeforeUnmount } from 'vue'
import { useModal } from '@/composables/useModal.js'
import TwitterIcon from './icons/TwitterIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import YouTubeIcon from './icons/YouTubeIcon.vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'FooterComponent',
  components: {
    TwitterIcon,
    LinkedinIcon,
    YouTubeIcon
  },
  setup() {
    const { openModal, closeModal, cleanup } = useModal()

    const handleFormSubmit = (formData) => {
      console.log('Form data received in footer:', formData)
    }

    const openContactModal = () => {
      openModal(ContactForm, {
        onSubmit: handleFormSubmit
      })
    }

    // Cleanup when component unmounts
    onBeforeUnmount(() => {
      cleanup()
    })

    return {
      openModal: openContactModal,
      closeModal
    }
  }
}
</script>

<style scoped>
.footer {
    background-color: #1f2937; /* Dark Gray */
    color: #f9fafb;
    padding: 40px 80px;
    width: 100%;
}

.footer-content {
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

/* Hidden until links are implemented */
/* TODO: Implement footer links */
.footer-content .footer-section {
    display: none;
}

.footer-section h4 {
    margin-bottom: 15px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 8px;
}

.footer-section ul li a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #ffffff;
}

.footer-bottom {
    max-width: 1600px;
    margin: 30px auto 0;
    padding-top: 20px;
    /* Hidden while not footer links */
    /* TODO: Implement footer links */
    text-align: center;
    color: #9ca3af;
}

.footer-bottom p {
    margin-bottom: 10px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
}

.social-links a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-links a:hover {
    color: #ffffff;
}

@media screen and (max-width: 1280px) {
    .footer {
        padding: 40px 40px;
    }
    .footer-content {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
    }
  
}

/* Responsive adjustments for this component */
@media (max-width: 768px) {
  .footer {
    padding: 40px 20px;
  }
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
</style>
