<script setup>
const props = defineProps({
  category: String,
  title: String,
  image: String,
  createdBy: String,
});
</script>

<template>
  <div class="card">
    <img
      :src="props.image"
      class="card-img-top recipe-image"
      :alt="props.title"
    />
    <div class="card-body">
      <p class="fs-6 mb-0">{{ props.category }}</p>
      <h5 class="card-title mb-3 fw-bolder">{{ props.title }}</h5>
      <p class="card-text">
        Recipe By <span class="fw-semibold">{{ props.createdBy }}</span>
      </p>
    </div>
  </div>
</template>


<style scoped>
.recipe-image {
  height: 180px;
  object-fit: cover;
}
</style>
