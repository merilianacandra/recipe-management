<script setup>
import UiInput from './UiInput.vue';
import UiDescription from './UiDescription.vue';
import UiButton from './UiButton.vue';

import { useFieldArray, useForm } from 'vee-validate';
import * as yup from 'yup';

import { ref } from 'vue';
import UiInputGroup from './UiInputGroup.vue';

const { handleSubmit } = useForm({
    validateOnInput: true,
    initialValues: {
        ingredients: ['']
    },
    validationSchema: yup.object({
        name: yup
            .string()
            .required("Nama resep wajib diisi"),
        preptime: yup
            .number()
            .typeError('Input hanya boleh angka')
            .required('Waktu Persiapan wajib diisi'),
        cooktime: yup
            .number()
            .typeError('Input hanya boleh angka')
            .required('Waktu Memasak wajib diisi'),
        totaltime: yup
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
            )
            .min(1, 'Minimal 1 ingredient')
    })
})

const submit = handleSubmit(async (values) => {
    console.log('values form', values);
})

const { remove, push, fields } = useFieldArray('ingredients')
</script>

<template>
    <form @submit.prevent="submit">
        <div class="card">
            <div class="card-header">
                Detail Resep
            </div>
            <div class="card-body">
                <UiInput id="recipe-title" type="text" title="Nama Resep" placeholder="Nama Resep" name="name"
                    class="mb-3" />
                <div class="row">
                    <div class="col-lg-4">
                        <UiInput id="recipe-preptime" type="text" title="Waktu Persiapan" placeholder="Waktu Persiapan"
                            name="preptime" class="mb-3" />
                    </div>
                    <div class="col-lg-4">
                        <UiInput id="recipe-cooktime" type="text" title="Waktu Memasak" placeholder="Waktu Memasak"
                            name="cooktime" class="mb-3" />
                    </div>
                    <div class="col-lg-4">
                        <UiInput id="recipe-totaltime" type="text" title="Total Waktu Memasak"
                            placeholder="Total Waktu Memasak" name="totaltime" class="mb-3" />
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
                    <UiInputGroup v-for="(field, index) in fields" :key="field.key" :id="`ingredient-${index}`"
                        placeholder="Ingredient" :name="`ingredients[${index}]`" @add="push('')" @remove="remove(index)" :is-delete="fields.length === 1 && index === 0"/>
                </div>
            </div>
        </div>
        <!-- Directions -->
        <div class="mt-5">
            <UiButton title="Simpan Resep" type="submit" />
        </div>
    </form>
</template>