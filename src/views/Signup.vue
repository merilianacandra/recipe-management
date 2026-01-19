<script setup>
import UiInput from "@/components/UiInput.vue";
import UiButton from "@/components/UiButton.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

import UiModal from "@/components/UiModal.vue";
import { Vue3Lottie } from 'vue3-lottie'
import CheckedJSON from '@/assets/lottie/Checked.json'

import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";

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
    firstname: yup
      .string()
      .required('Firstname wajib diisi!'),
    lastname: yup
      .string()
      .required('Firstname wajib diisi!'),
    confirmPassword: yup
      .string()
      .required('Confirm Password wajib diisi!')
      .oneOf([yup.ref('password')], 'Passwords tidak cocok'),
  }),
});

const modal = ref(null)

onMounted(() => {
  const el = document.getElementById("signupModal")
  modal.value = new Modal(el)
})

const submit = handleSubmit((values) => {
  modal.value.show()
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
            <UiInput id="firstname" type="text" title="First Name" name="firstname" class="mb-3" />
            <UiInput id="lastname" type="text" title="Last Name" name="lastname" class="mb-3" />
            <UiInput id="email" type="email" title="Email Address" name="email" class="mb-3" />
            <UiInput id="password" type="password" title="Password" name="password" class="mb-3" />
            <UiInput id="confirm-password" type="password" title="Confirm Password" name="confirmPassword" class="mb-3"/>
            <div class="text-center">
              <p class="mt-0">Already have account? <RouterLink to="/login" class="sign-in">Sign In</RouterLink>
              </p>
              <UiButton title="Sign Up" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <UiModal id="signupModal">
    <Vue3Lottie :animationData="CheckedJSON" :height="200" :width="200" />
    <div class="text-center mb-4">
      <h2>Berhasil Masuk!</h2>
      <p>Selamat! Anda telah berhasil masuk ke akun Anda.</p>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-4">
        <RouterLink to="/" class="btn w-100 btn-ui-color-solid">Profile</RouterLink>
      </div>
      <div class="col-4">
        <RouterLInk to="/" class="btn w-100 btn-ui-color-outline">Home</RouterLInk>
      </div>
    </div>
  </UiModal>
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

.btn-ui-color-solid {
  background-color: #5c3e94;
  color: #ffffff;
  transition: background-color .3s ease;
}

.btn-ui-color-outline {
  color: #5c3e94;
  border-color: #5c3e94;
}

.btn-ui-color-solid:hover {
  background-color: #5c3e94e7;
}

.btn-ui-color-outline:hover {
  transition: background-color .3s ease;
  background-color: #5c3e94e7;
  color: #ffffff;
}
</style>
