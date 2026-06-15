<script setup>
import { Icon } from "@iconify/vue";
import { useField } from "vee-validate";

const props = defineProps({
    id: String,
    type: String,
    placeholder: String,
    name: String,
    isDelete: Boolean
});

const { value, errorMessage } = useField(props.name);
</script>

<template>
    <div class="mb-3">
        <div class="input-group">
            <input :type="props.type" :id="props.id" class="form-control" v-model="value"
                :placeholder="props.placeholder" />
            <button class="btn btn-outline-success" type="button" id="button-addon2" @click="$emit('add')">
                <Icon icon="ri:add-circle-fill" />
            </button>
            <button class="btn btn-outline-danger" type="button" id="button-addon2" @click="$emit('remove')" v-if="!props.isDelete">
                <Icon icon="material-symbols:delete" />
            </button>
        </div>
        <span class="error-message">{{ errorMessage }}</span>
    </div>
</template>

<style scoped>
.error-message {
    color: #DC0000;
    font-size: 12px;
}
</style>
