<script setup>
const props = defineProps({
  id: String,
  type: String,
  title: String,
  placeholder: String
});
</script>

<template>
  <label :for="props.id" class="form-label">{{ props.title }}</label>
  <input :type="props.type" :id="props.id" class="form-control mb-3" :placeholder="props.placeholder"/>
</template>
