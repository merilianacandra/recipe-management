<script setup>
import UiInput from "@/components/UiInput.vue";
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-lg-5">
      <div class="p-5 bg-white rounded-3 shadow">
        <div class="text-center mb-4">
          <h1 class="signin-title">Sign In to Your Account</h1>
          <p class="signin-description">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form>
          <UiInput id="email" type="email" title="Email Address" />
          <UiInput id="password" type="password" title="Password" />
        </form>
        <div class="text-center">
            <button class="btn btn-primary w-100" type="submit">
                Sign In
            </button>
            <p class="mt-3">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.signin-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
}
.signin-description {
  font-size: 16px;
  color: #666;
}
</style>
