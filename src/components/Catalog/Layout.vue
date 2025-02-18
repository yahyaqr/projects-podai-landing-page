<template>
    <div class="bg-gray-50 flex">
        <Sidebar v-if="authStore.user" />

        <main class="flex-1 overflow-auto p-6">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import { useAuthStore } from "../../stores/authStore";

const authStore = useAuthStore();
</script>