<template>
  <div v-if="message" class="error-message">
    <div class="error-content">
      <span class="error-icon">{{ icon }}</span>
      <span class="error-text">{{ message }}</span>
      <button 
        v-if="dismissible" 
        type="button" 
        class="error-close" 
        @click="handleClose"
        :aria-label="closeLabel"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: '⚠️'
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    closeLabel: {
      type: String,
      default: 'Close error message'
    }
  },
  emits: ['close'],
  methods: {
    handleClose() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.error-message {
  margin-bottom: 20px;
  animation: slideDown 0.3s ease-out;
}

.error-content {
  display: flex;
  align-items: center;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px 16px;
  color: #dc2626;
}

.error-icon {
  margin-right: 8px;
  font-size: 16px;
}

.error-text {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.error-close {
  background: none;
  border: none;
  color: #dc2626;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.error-close:hover {
  background-color: #fca5a5;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
