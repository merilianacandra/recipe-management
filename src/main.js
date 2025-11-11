import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

import { createApp } from 'vue'
import App from './App.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')