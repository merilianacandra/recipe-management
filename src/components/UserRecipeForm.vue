<script setup>
import UiInput from './UiInput.vue';
import UiDescription from './UiDescription.vue';
import UiButton from './UiButton.vue';
import UiSelect from './UiSelect.vue';
import UiInputGroup from './UiInputGroup.vue';
import UiModal from './UiModal.vue';
import UiCustomFileInput from './UiCustomFileInput.vue';

import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';

import { useRecipeStore } from '@/store/RecipeStore.js';

import { computed, onMounted, ref } from 'vue';

import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const categories = ref([
    {
        label: "Dinner",
        value: "dinner",
    },
    {
        label: "Lunch",
        value: "lunch",
    },
    {
        label: "Breakfast",
        value: "breakfast",
    }
])

const { handleSubmit, setFieldValue, setValues } = useForm({
    validateOnInput: true,
    initialValues: {
        category: '',
        ingredients: [''],
        directions: ['']
    },
    validationSchema: yup.object({
        title: yup
            .string()
            .required("Nama resep wajib diisi"),
        category: yup
            .string()
            .required("Categori resep wajib diisi"),
        prepTime: yup
            .number()
            .typeError('Input hanya boleh angka')
            .required('Waktu Persiapan wajib diisi'),
        cookTime: yup
            .number()
            .typeError('Input hanya boleh angka')
            .required('Waktu Memasak wajib diisi'),
        totalTime: yup
            .number()
            .typeError('Input hanya boleh angka')
            .required('Total Waktu Memasak wajib diisi'),
        description: yup
            .string()
            .required('Deskripsi resep wajib diisi'),
        ingredients: yup
            .array()
            .of(
                yup
                    .string()
                    .required('Ingredient wajib diisi')
            ),
        directions: yup
            .array()
            .of(
                yup
                    .string()
                    .required('Directions wajib diisi')
            ),
        image: yup
            .string()
            .required("Gambar resep wajib diisi"),
    })
})

const { fields: ingredientsFields, push: ingredientsPush, remove: ingredientsRemove } = useFieldArray('ingredients')
const { fields: directionsFields, push: directionsPush, remove: directionsRemove } = useFieldArray('directions')

const store = useRecipeStore()

// If Edit 
const route = useRoute()
const router = useRouter()
const isEdit = computed(() => !!route.params.id)
const { recipe } = storeToRefs(store)
const recipeImage = ref('')

onMounted(async () => {
    if (isEdit.value) {
        await store.getRecipeDetail(route.params.id)
        setValues(recipe.value)
        recipeImage.value = recipe.value.image
    }
})

const submit = handleSubmit(async (values) => {
    try {
        if (isEdit.value) {
            await store.updateRecipe(route.params.id, values)
        } else {
            await store.addRecipe(values)
        }
    } catch (err) {
        console.log(err)
    } finally {
        router.push('/user/my-recipes')
    }
})
</script>

<template>
    <form @submit.prevent="submit">
        <div class="card">
            <div class="card-header">
                Detail Resep
            </div>
            <div class="card-body">
                <UiCustomFileInput class="mb-3" placeholder="Gambar Resep" name="image"
                    id="recipe-image" />
                    
                <UiInput id="recipe-title" type="text" title="Nama Resep" placeholder="Nama Resep" name="title"
                    class="mb-3" />

                <UiSelect :options="categories" name="category" title="Categori Resep" class="mb-3" />
                <div class="row">
                    <div class="col-lg-4">
                        <UiInput id="recipe-preptime" type="text" title="Waktu Persiapan" placeholder="Waktu Persiapan"
                            name="prepTime" class="mb-3" />
                    </div>
                    <div class="col-lg-4">
                        <UiInput id="recipe-cooktime" type="text" title="Waktu Memasak" placeholder="Waktu Memasak"
                            name="cookTime" class="mb-3" />
                    </div>
                    <div class="col-lg-4">
                        <UiInput id="recipe-totaltime" type="text" title="Total Waktu Memasak"
                            placeholder="Total Waktu Memasak" name="totalTime" class="mb-3" />
                    </div>
                </div>
                <UiDescription id="description" title="Deskripsi Resep" placeholder="Deskripsi Resep"
                    name="description" />
            </div>
        </div>

        <div class="mt-5">
            <div class="card">
                <div class="card-header">
                    Ingredients
                </div>
                <div class="card-body">
                    <!-- Ingredients -->
                    <UiInputGroup v-for="(field, index) in ingredientsFields" :key="field.key"
                        :id="`ingredient-${index}`" placeholder="Ingredient" :name="`ingredients[${index}]`"
                        @add="ingredientsPush('')" @remove="ingredientsRemove(index)"
                        :is-delete="ingredientsFields.length === 1 && index === 0" />
                </div>
            </div>
        </div>
        <!-- Directions -->

        <div class="mt-5">
            <div class="card">
                <div class="card-header">
                    Directions
                </div>
                <div class="card-body">
                    <!-- Ingredients -->
                    <UiInputGroup v-for="(field, index) in directionsFields" :key="field.key" :id="`direction-${index}`"
                        placeholder="Direction" :name="`directions[${index}]`" @add="directionsPush('')"
                        @remove="directionsRemove(index)" :is-delete="directionsFields.length === 1 && index === 0" />
                </div>
            </div>
        </div>
        <div class="mt-5">
            <UiButton :title="isEdit ? 'Update Resep' : 'Simpan Resep'" type="submit" />
        </div>
    </form>

    <UiModal id="imageModal">

    </UiModal>
</template>