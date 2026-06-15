<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
    name: String,
    options: Array,
    title: String
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
    <div>
        <label :for="props.id" class="form-label">{{ props.title }}</label>
        <select v-model="value" class="form-select">
            <option value="" disabled>Pilih...</option>
            <option v-for="opt in options" :key="opt.value" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>

        <span class="text-danger">{{ errorMessage }}</span>
    </div>
</template>

<style scoped>
.error-message {
    color: #DC0000;
    font-size: 12px;
}
</style>