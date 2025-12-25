<script setup>
import { ref } from "vue";
import UiInput from "@/components/UiInput.vue";
import UiButton from "@/components/UiButton.vue";

const signInData = ref({
  email: "",
  password: "",
});

const submit = () => {
  alert(`Your Email : ${signInData.value.email}`);
};
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
        <form @submit.prevent="submit">
          <UiInput id="email" type="email" title="Email Address" v-model="signInData.email" placeholder="Your Email" />
          <UiInput id="password" type="password" title="Password" v-model="signInData.password"
            placeholder="Your Password" />

          <div class="text-center">
            <UiButton title="Sign In" type="submit" />
            <p class="mt-3">Don't have an account? <RouterLink to="/signup" class="sign-up">Sign Up</RouterLink>
            </p>
          </div>
        </form>

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

.sign-up {
  color: #5c3e94;
  text-decoration: none;
  transition: font-weight .3s ease;
}

.sign-up:hover {
  font-weight: 600;
}
</style>
