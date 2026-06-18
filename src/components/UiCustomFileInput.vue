<script setup>
import { useField } from "vee-validate";
import UiModal from "./UiModal.vue";
import { Modal } from "bootstrap";
import { onMounted, ref } from "vue";

const props = defineProps({
    type: String,
    placeholder: String,
    name: String,
    isDelete: Boolean,
    id: String
});

const { value, errorMessage } = useField(() => props.name);

const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}

const onFileChange = async (e) => {
    const file = e.target.files[0]

    if (!file) return

    const base64 = await toBase64(file)

    value.value = base64
}

const currentImage = ref('')
const modal = ref(null)

onMounted(() => {
  const el = document.getElementById("fileModal")
  modal.value = new Modal(el)
})

const openFile = (file) => {
    currentImage.value = file
    modal.value.show();
}
</script>

<template>
    <div class="input-group">
        <input type="file" class="form-control" :id="props.id" :placeholder="props.placeholder"
            v-on:change="onFileChange">
        <button class="btn btn-outline-primary" type="button" :disabled="value === undefined"
            @click="openFile(value)">Lihat File</button>
        <span class="error-message">{{ errorMessage }}</span>
    </div>

    <UiModal id="fileModal">
        <img :src="currentImage" :alt="props.name" style="width: 100%;">
    </UiModal>
</template>