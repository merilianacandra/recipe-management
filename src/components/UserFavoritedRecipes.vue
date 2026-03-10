<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="col-lg-9 mb-4">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="mb-3 mb-sm-0">
                    <p class="my-0 fs-4 fw-semibold">Favorite Recipe</p>
                    <p class="my-0 text-secondary">Save the recipe that you loved here</p>
                </div>
            </li>
            <li class="list-group-item">
                <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="mb-0">Recipe Category</p>
                                        <div class="h-50">
                                            <h4 class="fs-5 mb-0">Recipe Name</h4>
                                        </div>
                                        <p>Description</p>
                                    </div>
                                    <div class="d-flex">
                                        <img src="https://placehold.co/200x100" alt="" width="90" height="80"
                                            class="rounded" style="object-fit: cover">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-3 pt-3 border-top">
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