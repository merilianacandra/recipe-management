<script setup>
const props = defineProps({
  ingredients: Object
})
</script>
<template>
  <div class="my-3">
    <div class="card">
      <div class="card-header">
        <p class="fs-4 my-0 fw-semibold">Ingredients</p>
      </div>
      <div class="card-body">
        <ul class="mb-0">
          <li v-for="ingredient in props.ingredients">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
