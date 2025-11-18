<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="border border-secondary-sublet rounded p-4">
    <div class="row flex-column-reverse flex-lg-row justify-content-between">
      <div class="col-lg-8">
        <h2>Napa Cabbage Kimchi</h2>
        <p>
          this dish is so common and iconic among Koreans that we simply call it
          “kimchi.” When people talk about kimchi, this is the side dish they're
          referring to, despite the fact that there are many kinds of kimchi in
          Korean cuisine, and many made with napa cabbage, too.
        </p>

        <div class="d-flex detail-time">
          <div class="col-4 py-2 px-3 detail-preptime">
            <p class="my-0">Preptime</p>
            <p class="my-0">20 Mins</p>
          </div>
          <div class="col-4 py-2 px-3 detail-cooktime">
            <p class="my-0">Cooktime</p>
            <p class="my-0">20 Mins</p>
          </div>
          <div class="col-4 py-2 px-3">
            <p class="my-0">Total</p>
            <p class="my-0">20 Mins</p>
          </div>
        </div>

        <p class="my-3">Recipe By David Brown</p>
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
            src="https://placehold.co/300"
            alt="Food"
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
