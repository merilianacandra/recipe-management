<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  title: String,
  description: String,
  prepTime: String,
  cookTime: String,
  totalTime: String,
  createdBy: String,
  image: String
})
</script>

<template>
  <div class="border border-secondary-sublet rounded p-4">
    <div class="row flex-column-reverse flex-lg-row justify-content-between">
      <div class="col-lg-8">
        <h2>{{ props.title }}</h2>
        <p>
          {{  props.description }}
        </p>

        <div class="d-flex detail-time">
          <div class="col-4 py-2 px-3 detail-preptime">
            <p class="my-0">Preptime</p>
            <p class="my-0">{{  props.prepTime }}</p>
          </div>
          <div class="col-4 py-2 px-3 detail-cooktime">
            <p class="my-0">Cooktime</p>
            <p class="my-0">{{  props.cookTime }}</p>
          </div>
          <div class="col-4 py-2 px-3">
            <p class="my-0">Total</p>
            <p class="my-0">{{ props.totalTime }}</p>
          </div>
        </div>

        <p class="my-3">Recipe By {{  props.createdBy }}</p>
        <div>
          <button class="btn btn-outline-primary">
            <Icon icon="mdi:heart" width="24" height="24" />
            Add To Favorite
          </button>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="mb-5 mt-lg-0">
          <img
            :src="props.image"
            :alt="props.title"
            class="w-100 rounded mx-auto"
            style="object-fit: cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-time {
  border: 1px solid #5c3e94;
  border-radius: 10px;
}

.detail-preptime,
.detail-cooktime {
  border-right: 1px solid #5c3e94;
}
</style>