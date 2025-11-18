<script setup>
import RecipeDetailDescription from "@/components/RecipeDetailDescription.vue";
import RecipeDetailIngredients from "@/components/RecipeDetailIngredients.vue";
import RecipeDetailDirections from "@/components/RecipeDetailDirections.vue";
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10">
        <RecipeDetailDescription />
        <RecipeDetailIngredients />
        <RecipeDetailDirections />
      </div>
    </div>
  </div>
</template>
