<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  id: String,
  type: String,
  title: String,
  placeholder: String,
  name: String,
});

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div>
    <label :for="props.id" class="form-label">{{ props.title }}</label>
    <input
      :type="props.type"
      :id="props.id"
      class="form-control"
      v-model="value"
      :placeholder="props.placeholder"
    />
    <span class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.error-message {
  color: #DC0000;
  font-size: 12px;
}

</style>
