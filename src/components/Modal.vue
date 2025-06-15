<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeOnOverlay">
    <div class="modal-container" @click.stop>
      <button class="close-button" @click="closeModal">
        <X :size="24" />
      </button>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { X } from 'lucide-vue-next'

export default {
  name: 'Modal',
  components: {
    X
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close'],
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    closeOnOverlay() {
      if (this.closeOnOverlayClick) {
        this.closeModal()
      }
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape' && this.isVisible) {
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-container {
  background-color: white;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 90vh;
  width: 500px;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: modalAppear 0.3s ease-out;
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s ease;
  z-index: 1001;
}

.close-button:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.modal-content {
  padding: 24px;
  padding-top: 48px;
  overflow-y: auto;
  max-height: calc(90vh - 48px);
}

@keyframes modalAppear {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-container {
    width: 95vw;
    margin: 20px;
  }
  
  .modal-content {
    padding: 20px;
    padding-top: 40px;
  }
}
</style>
