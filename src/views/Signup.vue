<script setup>
import UiInput from "@/components/UiInput.vue";
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

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
            <h1 class="signup-title">Create Your Account</h1>
            <p class="signup-description">
              Enter your details to use all the app features
            </p>
          </div>
          <form @submit.prevent="submit">
            <UiInput
              id="firstname"
              type="text"
              title="First Name"
              name="firstname"
              class="mb-3"
            />

            <UiInput
              id="lastname"
              type="text"
              title="Last Name"
              name="lastname"
              class="mb-3"
            />

            <UiInput
              id="email"
              type="email"
              title="Email Address"
              name="email"
              class="mb-3"
            />

            <UiInput
              id="password"
              type="password"
              title="Password"
              name="password"
              class="mb-3"
            />

            <UiInput
              id="confirm-password"
              type="password"
              title="Confirm Password"
              name="confirmPassword"
            />
            <div class="text-center mt-4">
              <p class="mt-0">
                Already have account?
                <RouterLink to="/login">Sign In</RouterLink>
              </p>
              <button class="btn btn-primary w-100" type="submit">
                Sign Up
              </button>
            </div>
          </form>
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
