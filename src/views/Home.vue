<script setup>
import RecipeCard from '@/components/RecipeCard.vue';
</script>

<template>
  <div class="container">
    <!-- Page Title and Description -->
    <div class="text-center py-5">
      <h1 class="fs-3 fw-bold">Tasty Recipe</h1>
      <p class="fs-6">
        Find and share everyday cooking inspiration on Tasty Recipe. Discover
        recipes, cooks, and how-tos based on the food you love and the friends
        you follow.
      </p>
    </div>

    <!-- Recipe List -->
    <div class="row gy-4">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <RecipeCard />
      </div>
    </div>
  </div>    
</template>
