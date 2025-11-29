<script setup>
import UiInput from "@/components/UiInput.vue";
import { ref } from "vue";

const signUpData = ref({
  email: "",
  confirPassword: "",
  password: "",
});

const submit = () => {
  alert(`Your Email : ${signUpData.value.email}`);
};
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
        <form @submit.prevent="submit">
          <UiInput id="email" type="email" title="Email Address" v-model="signUpData.email"/>
          <UiInput id="password" type="password" title="Password" v-model="signUpData.password"/>
          <UiInput
            id="confirm-password"
            type="password"
            title="Confirm Password"
            v-model="signUpData.confirPassword"
          />
          <div class="text-center">
            <p class="mt-0">
              Already have account? <RouterLink to="/login">Sign In</RouterLink>
            </p>
            <button class="btn btn-primary w-100" type="submit">Sign Up</button>
          </div>
        </form>
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
