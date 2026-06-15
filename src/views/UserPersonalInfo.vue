<script setup>
import UserMenu from '@/components/UserMenu.vue';
import UserPersonalInfo from '@/components/UserPersonalInfo.vue';

import { useAuthStore } from '@/store/AuthStore';
import { storeToRefs } from 'pinia';

const store = useAuthStore()
const { userData, isLoading } = storeToRefs(store)

</script>

<template>
    <div class="container-md my-5 py-5">
        <div class="row">
            <UserMenu />
            <UserPersonalInfo :firstname="userData.firstname" :lastname="userData.lastname" :email="userData.email" :username="userData.username"/>
        </div>
    </div>
</template>