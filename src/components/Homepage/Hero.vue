<template>
    <div class="relative">
        <!-- Background with color instead of image -->
        <div class="absolute inset-0 z-0 bg-gray-800"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto flex items-center justify-end px-6 py-32">
            <div class="max-w-2xl text-right">
                <h2 class="text-white text-xl mb-4">
                    PLATFORM BELAJAR ADVOKASI HUKUM
                </h2>
                <h1 class="text-white text-6xl font-bold mb-6">
                    BerkasLegal
                </h1>
                <p class="text-white text-xl mb-8">
                    Akses materi hukum terkini dari para ahli, kapan pun Anda butuhkan
                </p>
                <router-link :to="destination"
                    class="bg-[#C41E3A] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#A01830] transition-colors">
                    BELAJAR SEKARANG
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "../../stores/authStore"; // Adjust path based on your authStore location

// Access the authentication store
const authStore = useAuthStore();

// Dynamically set the destination
const destination = computed(() =>
    authStore.isAuthenticated ? "/catalog/dashboard" : "/catalog"
);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>