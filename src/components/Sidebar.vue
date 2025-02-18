<template>
    <div>
        <div :class="[
            'fixed left-0 bg-[#C41E3A] text-white z-50 transition-all duration-300 ease-in-out shadow-lg',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]" class="flex flex-col w-64 max-h-1/2 top-1/2 -translate-y-1/2">
            <button
                class="absolute top-0 -right-10 bg-[#C41E3A] text-white p-2 rounded-r-md hover:bg-[#A01830] transition-colors"
                @click="toggleSidebar">
                <ChevronLeft v-if="sidebarOpen" class="h-6 w-6" />
                <ChevronRight v-else class="h-6 w-6" />
            </button>

            <!-- User Info Section -->
            <div class="p-6 bg-white bg-opacity-10 text-white rounded-b-md">
                <div v-if="authStore.user" class="space-y-2">
                    <h2 class="text-lg font-semibold">Welcome, {{ authStore.user.name }}!</h2>
                    <p class="text-sm text-gray-200">{{ authStore.user.email }}</p>
                </div>
                <div v-else>
                    <p class="text-sm mb-4">You are not logged in.</p>
                    <button class="px-4 py-2 bg-white text-[#C41E3A] rounded-md hover:bg-gray-100 transition-colors"
                        @click="redirectToLogin">
                        Login
                    </button>
                </div>
            </div>

            <!-- Sidebar Buttons -->
            <div class="p-6 flex-grow">
                <div class="space-y-4">
                    <button v-for="(button, index) in buttons" :key="index"
                        class="w-full text-left px-4 py-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors">
                        {{ button }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronRight, ChevronLeft } from "lucide-vue-next";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const sidebarOpen = ref(false);

const buttons = [
    "Dashboard",
    "Analytics",
    "Settings",
];

const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};

// Handle logout
const handleLogout = async () => {
    await authStore.logout();
    alert("You have been logged out!");
};

// Redirect to login page (update the path as per your app)
const redirectToLogin = () => {
    window.location.href = "/login";
};
</script>
