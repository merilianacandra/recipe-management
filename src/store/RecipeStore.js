import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useRecipeStore = defineStore("recipe", () => {
  // state
  const recipes = ref([]);
  const isLoading = ref(false);
  const recipe = ref({})

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

  return {
    recipes,
    getRecipeById,
    isLoading,
    getRecipes,
    getRecipeDetail,
    recipe
  };
});
