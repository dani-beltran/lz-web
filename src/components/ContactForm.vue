<template>
   <h3>Contact us</h3>
    <p class="subtitle">If you have any questions, feel free to reach out!</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            class="form-input"
            placeholder="Enter your full name"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            class="form-input"
            placeholder="Enter your email address"
          />
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            class="form-input"
            placeholder="What is this about?"
          />
        </div>
        
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            class="form-textarea"
            rows="4"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>
        
        <div class="form-actions">
          <button type="button" @click="$emit('cancel')" class="btn-cancel">
            Cancel
          </button>
          <button type="submit" class="btn-submit">
            Send Message
          </button>
        </div>
      </form>
</template>

<script>
export default {
  name: 'ContactForm',
  emits: ['submit', 'cancel'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', { ...this.form })
      this.resetForm()
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
};
</script>
<style scoped>
.subtitle {
  font-size: 16px;
  color: #6b7280; /* Gray */
  margin-bottom: 24px;
}

.contact-form {
  max-width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #374151;
  font-size: 14px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #270972;
  box-shadow: 0 0 0 3px rgba(39, 9, 114, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn-cancel,
.btn-submit {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-cancel {
  background-color: #f3f4f6;
  color: #374151;
}

.btn-cancel:hover {
  background-color: #e5e7eb;
}

.btn-submit {
  background-color: #270972;
  color: white;
}

.btn-submit:hover {
  background-color: #1e0654;
}

@media (max-width: 480px) {
  .form-actions {
    flex-direction: column;
  }
  
  .btn-cancel,
  .btn-submit {
    width: 100%;
  }
}
</style>