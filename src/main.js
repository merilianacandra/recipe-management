import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import Cookies from "js-cookie";
import { useAuthStore } from './store/AuthStore'

const pinia = createPinia()

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(pinia)

const store = useAuthStore();

router.beforeEach(async (to) => {
  const userToken = Cookies.get('userToken')
  const userId = Cookies.get('userId')
  const expiresIn = Cookies.get('expiresIn')

  if (!userToken && (to.path === "/user" || to.path === "/user/favorite-recipes" || to.path === "/user/my-recipes")) {
    return { path: '/login' }
  }

  if (userToken && Date.now() < Number(expiresIn)) {
    await store.getUser(userToken, userId)
  } else {
    if (to.path === "/user" || to.path === "/user/favorite-recipes" || to.path === "/user/my-recipes") {
      return { path: '/login' }
    }
    return true
  }

})

app.use(router)
app.mount('#app')