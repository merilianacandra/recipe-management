<script setup>
import RecipeDetailDescription from "@/components/RecipeDetailDescription.vue";
import RecipeDetailIngredients from "@/components/RecipeDetailIngredients.vue";
import RecipeDetailDirections from "@/components/RecipeDetailDirections.vue";

import { useRecipeStore } from "@/store/RecipeStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const store = useRecipeStore();
const { getRecipeById } = storeToRefs(store);
const route = useRoute();
const id = Number(route.params.id);
const recipe = getRecipeById.value(id);
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10">
        <RecipeDetailDescription 
          :title="recipe.title"
          :description="recipe.description"
          :prepTime="recipe.prepTime"
          :cookTime="recipe.cookTime"
          :totalTime="recipe.totalTime"
          :createdBy="recipe.createdBy"
          :image="recipe.image"
        />
        <RecipeDetailIngredients :ingredients="recipe.ingredients" />
        <RecipeDetailDirections :directions="recipe.directions" />
      </div>
    </div>
  </div>
</template>
