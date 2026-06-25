import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthStore } from "./AuthStore";


export const useRecipeStore = defineStore("recipe", () => {
  // state
  const recipes = ref([]);
  const isLoading = ref(false);
  const recipe = ref({})

  const router = useRouter()
  const authStore = useAuthStore()
  const { userData } = storeToRefs(authStore)

  // getters
  const getRecipeById = computed(() => {
    return (id) => recipes.value.find(recipe => recipe.id === id)
  });

  // actions
  const getRecipes = async () => {
    try {
      isLoading.value = true
      const response = await axios.get(`${import.meta.env.VITE_FIREBASE_URL}/recipes.json`)
      // Response Mapping
      for (let key in response.data) {
        const data = { id: key, ...response.data[key] }
        recipes.value.push(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const getRecipeDetail = async (id) => {
    try {
      isLoading.value = true
      const response = await axios.get(`${import.meta.env.VITE_FIREBASE_URL}/recipes/${id}.json`)
      recipe.value = response.data
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const addRecipe = async (data) => {
    try {
      isLoading.value = true
      const userToken = Cookies.get('userToken')
      const expiresIn = Cookies.get('expiresIn')

      if (userToken && Date.now() < Number(expiresIn)) {
        await axios.post(`${import.meta.env.VITE_FIREBASE_URL}/recipes.json?auth=${userToken}`, 
          { 
            ...data,
            createdBy: `${userData.value.username}`,
            createdAt: Date.now(),
            userId: userData.value.userId
          }
        )
        router.push('/user/my-recipes')
      } else {
        router.push("/login")
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const getRecipeByUserId = async (data) => {
    try {
      isLoading.value = true
      const userId = userData.value.userId
      const response = await axios.get(
        `https://fe-recipe-v3-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json?orderBy="userId"&equalTo="${userId}"`
      );
      recipes.value = []
      for (let key in response.data) {
        const data = { id: key, ...response.data[key] }
        recipes.value.push(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const updateRecipe = async (id, data) => {
    try {
      isLoading.value = true
      const userToken = Cookies.get('userToken')
      const response = await axios.put(`https://fe-recipe-v3-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${id}.json?auth=${userToken}`, data)
    } catch {
      console.log('error')
    } finally {
      isLoading.value = false
    }
  }

  return {
    recipes,
    getRecipeById,
    isLoading,
    getRecipes,
    getRecipeDetail,
    recipe,
    addRecipe,
    getRecipeByUserId,
    updateRecipe
  };
});
