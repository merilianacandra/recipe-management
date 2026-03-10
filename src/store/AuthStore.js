import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", () => {
    const isLoading = ref(false)
    const userData = ref({})

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

    const signIn = async (data) => {
        try {
            isLoading.value = true
            const response = await axios.post(
                import.meta.env.VITE_SIGNIN_URL,
                {
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true
                }
            )

            const userToken = response.data.idToken
            const userId = response.data.localId
            const expiresIn = Date.now() + 60 * 60 * 1000

            Cookies.set('userToken', userToken)
            Cookies.set('userId', userId)
            Cookies.set('expiresIn', expiresIn)

            await getUser(userToken, userId)

        } catch (error) {
            throw error
        } finally {
            isLoading.value = false;
        }
    }

    const getUser = async (userToken, userId) => {
        try {
            isLoading.value = true
            const response = await axios.get(`${import.meta.env.VITE_FIREBASE_URL}/users.json?auth=${userToken}`)

            // Response Mapping
            for (let key in response.data) {
                const data = { id: key, ...response.data[key] }
                if (data.userId === userId) {
                    userData.value = data
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            isLoading.value = false
        }
    }

    const logout = () => {
        Cookies.remove('userToken')
        Cookies.remove('userId')
        Cookies.remove('expiresIn')

        userData.value = {}
    }

    return {
        isLoading,
        signUp,
        signIn,
        userData,
        getUser,
        logout
    }
})