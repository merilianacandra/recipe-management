<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="px-5 pt-5 pb-2 mt-5 footer">
    <div class="d-flex justify-content-between">
      <img
        src="/public/images/logo.png"
        alt="Tasty Recipes"
        class="footer-logo"
      />
      <div>
        <p class="mb-2 footer-follow">Follow us on</p>
        <div class="d-flex">
          <a href="#" class="me-3">
            <Icon icon="mdi:facebook" width="24" height="24" color="#5C3E94" />
          </a>
          <a href="#" class="me-3">
            <Icon icon="mdi:twitter" width="24" height="24" color="#5C3E94" />
          </a>
          <a href="#" class="me-3">
            <Icon icon="mdi:instagram" width="24" height="24" color="#5C3E94" />
          </a>
          <a href="#" class="me-3">
            <Icon icon="mdi:youtube" width="24" height="24" color="#5C3E94" />
          </a>
        </div>
      </div>
    </div>
    <p class="p-2 footer-copyright text-center">
      &copy; 2025 Tasty Recipes. All rights reserved.
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
}

.footer-logo {
  width: 150px;
  object-fit: contain;
}

.footer-copyright {
  font-size: 14px;
  color: #6c757d;
}

.footer-follow,
.footer-newsletter {
  font-size: 20px;
  font-weight: 600;
}
</style>
