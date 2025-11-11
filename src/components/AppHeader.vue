<template>
  <header class="px-5 py-3 border-bottom mb-4 shawdow">
    <div class="d-flex justify-content-between align-items-center">
      <img src="/public/images/logo.png" alt="Tasty Recipes" class="header-logo" />
      <RouterLink to="/signup" class="header-signup">
        <img src="/public/images/user.png" alt="User Icon" class="ms-auto" />
        <span class="header-text">Sign Up</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header-logo {
  width: 150px;
  height: auto;
}

.header-signup {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.header-signup img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.header-text {
  font-size: 16px;
  font-weight: 500;
  color: #5C3E94;
}
</style>
