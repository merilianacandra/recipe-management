<script setup>
const props = defineProps({
    title: String,
    type: String,
    color: { type: String, default: 'solid'}
});
</script>
<template>
    <button :type="props.type" class="btn w-100" :class="`btn-ui-color-${props.color}`">
        {{ props.title }}
    </button>
</template>

<style scoped>
    .btn-ui-color-solid {
        background-color: #5c3e94;
        color: #ffffff;
        transition: background-color .3s ease;
    }

    .btn-ui-color-outline {
        color: #5c3e94;
        border-color: #5c3e94;
    }

    .btn-ui-color-solid:hover {
        background-color: #5c3e94e7;
    }

    .btn-ui-color-outline:hover {
        transition: background-color .3s ease;
        background-color: #5c3e94e7;
        color: #ffffff;
    }
</style>