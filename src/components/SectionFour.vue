<template>
  <section class="section section-4" id="section-4">
    <div class="section-header">
      <h2 class="title">Our Team</h2>
      <p class="paragraph">Meet the passionate individuals behind LayerZ.</p>
    </div>
    <div class="section-content">
      <div class="grid-container">
        <div class="grid-item" style="background-color: rgba(113, 44, 246, 0.01)">
          <img
            src="@/assets/imgs/mike.jpg"
            alt="Team Member 1"
            class="item-image"
          />
          <div class="text-container">
            <h3 class="subtitle">Mike Rogers</h3>
            <p class="paragraph">CEO and Co-founder</p>
            <a href="https://www.linkedin.com/in/mike-a-rogers/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
        <div class="grid-item" style="background-color: rgba(243, 56, 158, 0.01)">
          <img
            src="@/assets/imgs/marc.jpg"
            alt="Team Member 2"
            class="item-image"
          />
          <div class="text-container">
            <h3 class="subtitle">Marc Lamarche</h3>
            <p class="paragraph">CMO and Co-founder</p>
            <a href="https://www.linkedin.com/in/marclamarche/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
        <div class="grid-item" style="background-color: rgba(92, 149, 255, 0.01)">
          <img
            src="@/assets/imgs/dani.jpg"
            alt="Team Member 3"
            class="item-image"
          />
          <div class="text-container">
            <h3 class="subtitle">Daniel Beltran</h3>
            <p class="paragraph">CTO and Co-founder</p>
            <a href="https://www.linkedin.com/in/daniellidonbeltran/" aria-label="LinkedIn">
              <LinkedinIcon class="linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Contact Us Button -->
      <div class="contact-button-container">
        <button class="contact-us-btn" @click="openContactModal">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { onBeforeUnmount } from 'vue'
import { useModal } from '@/composables/useModal.js'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import ContactForm from './ContactForm.vue'
import { emailService } from '../services/emailService';

export default {
  name: "SectionFour",
  components: {
    LinkedinIcon
  },
  mounted() {
    emailService.init();
  },
  setup() {
    const { openModal, cleanup } = useModal()

    const handleFormSubmit = async (formData) => {
        await emailService.sendContactForm(formData);
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
      openContactModal
    }
  }
};
</script>

<style scoped>
.section {
  width: 100vw;
  position: relative;
  padding: 60px 80px;
}
.section-4 {
  background-color: #FFF;
}

.section-header {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  color: #270972; /* Indigo */
}

.section-content {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 120px;
  width: 100%;
}

.grid-item {
  border-radius: 8px;
}

.contact-button-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
}

.contact-us-btn {
  background-color: #270972;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(39, 9, 114, 0.3);
}

.contact-us-btn:hover {
  background-color: #1f0659;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(39, 9, 114, 0.4);
}

.contact-us-btn:active {
  transform: translateY(0);
}

.item-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e0e0;
}

.text-container p {
  color: #6b7280; /* Gray */
}

.linkedin-icon {
  width: 24px;
  height: 24px;
  margin-top: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.linkedin-icon:hover {
  opacity: 0.7;
}

@media (max-width: 1280px) {
  .section {
    padding: 40px 40px;
  }

  .grid-container {
    gap: 40px;
  }

  .contact-button-container {
    margin-top: 40px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 20px;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }

  .contact-button-container {
    margin-top: 30px;
  }

  .contact-us-btn {
    padding: 14px 28px;
    font-size: 1rem;
  }
}
</style>
