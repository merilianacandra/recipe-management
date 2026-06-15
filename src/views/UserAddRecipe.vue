<script setup>
import UserRecipeForm from '@/components/UserRecipeForm.vue';
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <!-- <div class="recipe-border shadow-sm"> -->
                    <UserRecipeForm />
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .recipe-container {
    background-color: #f8f9fa;
} */
.recipe-border {
    border: 1px solid #f8f9fa;
    border-radius: 20px;
    padding: 20px;
    background-color: #f8f9fa;
}
</style>