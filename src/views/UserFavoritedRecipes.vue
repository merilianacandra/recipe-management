<script setup>
import UserMenu from '@/components/UserMenu.vue';
import UserFavoritedRecipes from '@/components/UserFavoritedRecipes.vue';
</script>

<template>
    <div class="container-md my-5 py-5">
        <div class="row">
            <UserMenu />
            <UserFavoritedRecipes />
        </div>
    </div>
</template>