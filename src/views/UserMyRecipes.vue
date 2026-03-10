<script setup>
import UserMenu from '@/components/UserMenu.vue';
import UserRecipes from '@/components/UserRecipes.vue';
</script>

<template>
    <div class="container-md my-5 py-5">
        <div class="row">
            <UserMenu />
            <UserRecipes />
        </div>
    </div>
</template>