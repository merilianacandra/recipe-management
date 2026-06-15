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

  const userToken = Cookies.get('userToken')
  const expiresIn = Cookies.get('expiresIn')
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
      const response = await axios.get('https://fe-recipe-v3-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
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
      const response = await axios.get(`https://fe-recipe-v3-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${id}.json`)
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
      if (userToken && Date.now() < Number(expiresIn)) {
        await axios.post(`https://fe-recipe-v3-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json?auth=${userToken}`, 
          { 
            ...data,
            createdBy: `${userData.username}`,
            createdAt: Date.now(),
            likes: ["null"]
          }
        )
        router.push('/user/my-recipes')
      } else {
        router.push("/login")
      }
    } catch (error) {

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
    addRecipe
  };
});
