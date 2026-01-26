import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
    const isLoading = ref(false);

    const postUserData = async (userData, userToken) => {

        await axios.post(`${import.meta.env.VITE_FIREBASE_URL}/users.json?auth=${userToken}`, userData)
    }

    const signUp = async (data) => {
        try {
            isLoading.value = true
            const response = await axios.post(
                import.meta.env.VITE_SIGNUP_URL,
                {
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true
                }
            )

            const userToken = response.data.idToken

            const userData = {
                userId: response.data.localId,
                email: response.data.email,
                firstname: data.firstname,
                lastname: data.lastname
            }

            await postUserData(userData, userToken)

        } catch (error) {
            throw error
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isLoading,
        signUp
    }
})