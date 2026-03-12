<script setup>
import { useAuthStore } from '@/store/AuthStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const store = useAuthStore()
const router = useRouter()

const { userData, isLoading } = storeToRefs(store)

const logout = () => {
  store.logout();
  router.push("/")
}
</script>
<template>
  <div class="col-lg-3 mb-4">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center">
          <div class="ps-3">
            <p class="my-0 fs-5 fw-semibold">{{ userData.firstname }} {{ userData.lastname }}</p>
            <p class="my-0 fs-6 text-secondary">{{ userData.email }}</p>
          </div>
        </div>
      </li>
      <li class="list-group-item user-menu">
        <RouterLink to="/user" class="header-link-item">
          Personal Info
        </RouterLink>
      </li>
      <li class="list-group-item user-menu">
        <RouterLink to="/user/favorite-recipes" class="header-link-item">
          Favorited Recipes
        </RouterLink>
      </li>
      <li class="list-group-item user-menu">
        <RouterLink to="/user/my-recipes" class="header-link-item">
          My Recipe
        </RouterLink>
      </li>
      <li class="list-group-item user-menu" @click="logout()">
        Logout
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu:hover {
  cursor: pointer;
}

.active-color {
  color: #4c4ddc;
}

.inactive-color {
  color: #404040;
}

.header-link-item {
  color: #404040;
  text-decoration: none;
}
</style>