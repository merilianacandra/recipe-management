import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

const pinia = createPinia()

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')