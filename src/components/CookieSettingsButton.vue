<template>
  <button 
    @click="$emit('show-settings')" 
    class="cookie-settings-button"
    title="Cookie Settings"
  >
    🍪 Cookie Settings
  </button>
</template>

<script>
export default {
  name: 'CookieSettingsButton',
  emits: ['show-settings']
}
</script>

<style scoped>
.cookie-settings-button {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.cookie-settings-button:hover {
  color: #374151;
  background: rgba(107, 114, 128, 0.1);
}
</style>
