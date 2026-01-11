<script setup>
import RecipeCard from '@/components/RecipeCard.vue';
import { useRecipeStore } from '@/store/RecipeStore';
import { storeToRefs } from 'pinia';
import UiSpinner from '@/components/UiSpinner.vue';

const store = useRecipeStore()
const { recipes, isLoading } = storeToRefs(store)

store.getRecipes()
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

    <UiSpinner v-if="isLoading" />
    <!-- Recipe List -->
    <div class="row gy-4">
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="item in recipes" :key="item.id">
        <RecipeCard :title="item.title" :category="item.category" :image="item.image" :createdBy="item.createdBy"
          :id="item.id" />
      </div>
    </div>
  </div>
</template>
