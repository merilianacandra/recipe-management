<script setup>
import { Icon } from "@iconify/vue";
import { useRecipeStore } from "@/store/RecipeStore";
import { storeToRefs } from "pinia";
import UiSpinner from '@/components/UiSpinner.vue';

const store = useRecipeStore()
const { recipes, isloading } = storeToRefs(store)

store.getRecipeByUserId()
</script>

<template>
    <div class="col-lg-9 mb-4">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center">
                    <div class="mb-3 mb-sm-0">
                        <p class="my-0 fs-4 fw-semibold">My Recipe</p>
                        <p class="my-0 text-secondary">Add your original recipe here</p>
                    </div>
                    <div>
                        <RouterLink class="btn btn-ui-color-solid px-3 py-2 rounded-pill" to="/user/add-recipe">
                            Add Recipe
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
                <UiSpinner v-if="isloading" />
                <div class="row">
                    <div class="col-md-6 col-12 my-2" v-for="item in recipes" :key="item.id">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="mb-0">{{ item.category }}</p>
                                        <div class="h-50">
                                            <h4 class="fs-5 mb-0">{{ item.title }}</h4>
                                        </div>
                                        <p>{{ item.description }}</p>
                                    </div>
                                    <div class="d-flex">
                                        <img :src="item.image" alt="" width="90" height="80" class="rounded"
                                            style="object-fit: cover">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-3 pt-3 border-top">
                                    <button class="btn px-3 py-2">
                                        <Icon icon="ri:ball-pen-line" width="24" height="24" color="#5C3E94" />
                                    </button>
                                    <button class="btn px-3 py-2">
                                        <Icon icon="ri:delete-bin-6-line" width="24" height="24" color="#5C3E94" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.btn-ui-color-solid {
    background-color: #5c3e94;
    color: #ffffff;
    transition: background-color .3s ease;
}
</style>