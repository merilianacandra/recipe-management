<script setup>
const props = defineProps({
  id: String,
  type: String,
  title: String,
  placeholder: String
});

const model = defineModel()
</script>

<template>
  <label :for="props.id" class="form-label">{{ props.title }}</label>
  <input :type="props.type" :id="props.id" class="form-control mb-3" v-model="model" :placeholder="props.placeholder" />
</template>
