<script setup>
import UiInput from "@/components/UiInput.vue";
import { ref } from "vue";
import UiButton from "@/components/UiButton.vue";

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
        <form>
          <div class="row">
            <div class="col-6">
              <UiInput id="firstname" type="text" title="First Name" placeholder="First Name" />
            </div>
            <div class="col-6">
              <UiInput id="lastname" type="text" title="Last Name" placeholder="Last Name" />
            </div>
          </div>
          <UiInput id="email" type="email" title="Email Address" placeholder="Email Address" />
          <UiInput id="password" type="password" title="Password" placeholder="Password" />
          <UiInput id="confirm-password" type="password" title="Confirm Password" placeholder="Confirm Password" />
        </form>
        <div class="text-center">
          <p class="mt-0">Already have account? <RouterLink to="/login" class="sign-in">Sign In</RouterLink>
          </p>
          <UiButton title="Sign Up" type="submit"/>

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

.sign-in {
  color: #5c3e94;
  text-decoration: none;
  transition: font-weight .3s ease;
}

.sign-in:hover {
  font-weight: 600;
}
</style>
