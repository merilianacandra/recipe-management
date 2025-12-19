<script setup>
const props = defineProps({
    title: String,
    type: String,
});
</script>
<template>
    <button :type="props.type" class="btn btn-ui-color w-100">
        {{ props.title }}
    </button>
</template>

<style scoped>
    .btn-ui-color {
        background-color: #5c3e94;
        color: #ffffff;
        transition: background-color .3s ease;
    }

    .btn-ui-color:hover {
        background-color: #5c3e94e7;
    }
</style>