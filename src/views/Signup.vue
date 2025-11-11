<script setup>
import UiInput from "@/components/UiInput.vue";
</script>
<template>
  <div class="row justify-content-center">
    <div class="col-lg-5">
      <div class="p-5 bg-white rounded-3 shadow">
        <div class="text-center mb-4">
          <h1 class="signup-title">Create Your Account</h1>
          <p class="signup-description">
            Enter your details to use all the app features
          </p>
        </div>
        <form>
          <UiInput id="email" type="email" title="Email Address" />
          <UiInput id="password" type="password" title="Password" />
          <UiInput id="confirm-password" type="password" title="Confirm Password" />
        </form>
        <div class="text-center">
            <p class="mt-0">Already have account? Sign In</p>
            <button class="btn btn-primary w-100" type="submit">
                Sign Up
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.signup-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
}
.signup-description {
  font-size: 16px;
  color: #666;
}
</style>
