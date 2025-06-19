import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create and mount the Vue app with router
const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('Vue.js application with routing loaded successfully!')
