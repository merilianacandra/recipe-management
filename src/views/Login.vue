<script setup>
import { ref } from "vue";
import UiInput from "@/components/UiInput.vue";
import UiButton from "@/components/UiButton.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

// const signInData = ref({
//   email: "",
//   password: "",
// });

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required("Email wajib diisi!")
      .email("Format Email Salah!"),
    password: yup
      .string()
      .required("Password wajib diisi!")
      .min(8, "Password minimal 6 karakter!"),
  }),
});

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="container">
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
            <UiInput id="email" type="email" title="Email Address" placeholder="Your Email" name="email" class="mb-3" />
            <UiInput id="password" type="password" title="Password" placeholder="Your Password" name="password" />

            <div class="text-center">
              <UiButton title="Sign In" type="submit" />
              <p class="mt-3">Don't have an account? <RouterLink to="/signup" class="sign-up">Sign Up</RouterLink>
              </p>
            </div>
          </form>
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

.sign-up {
  color: #5c3e94;
  text-decoration: none;
  transition: font-weight .3s ease;
}

.sign-up:hover {
  font-weight: 600;
}
</style>
