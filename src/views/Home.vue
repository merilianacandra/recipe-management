<script setup>
import RecipeCard from '@/components/RecipeCard.vue';

const recipes = [
  {
    id: 1,
    category: 'Dinner',
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    image: 'public/images/spaghetti-carbonara.jpg',
    createdBy: 'Luigi',
  },
  {
    id: 2,
    category: 'Breakfast',
    title: 'Chicken Tikka Masala',
    description: 'Chunks of grilled chicken enveloped in a creamy spiced tomato sauce.',
    image: 'public/images/chicken-tikka-masala.jpg',
    createdBy: 'Ayesha',
  },
  {
    id: 3,
    category: 'Lunch',
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy mix of fresh vegetables sautéed in a savory sauce.',
    image: 'public/images/vegetable-stir-fry.jpg',
    createdBy: 'Chen',
  },
  {
    id: 4,
    category: 'Dinner',
    title: 'Beef Tacos',
    description: 'Seasoned ground beef served in crispy taco shells with fresh toppings.',
    image: 'public/images/beef-tacos.jpg',
    createdBy: 'Maria',
  },
];

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
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="item in recipes" :key="item.id">
        <RecipeCard :title="item.title" :category="item.category" :image="item.image" :createdBy="item.createdBy" :id="item.id"/>
      </div>
    </div>
  </div>    
</template>
