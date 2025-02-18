<template>
    <nav class="bg-white py-4 px-6 relative w-full z-50 shadow-sm">
        <div class="max-w-7xl mx-auto">
            <!-- Navbar Main Row -->
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <router-link to="/">
                        <img src="/src/assets/Logo.png" alt="Logo" class="h-12 w-32" />
                    </router-link>
                </div>

                <!-- Search Bar for Wide Screens -->
                <div class="hidden md:flex flex-1 max-w-2xl mx-8">
                    <div class="relative w-full">
                        <input type="text" placeholder="Search for a course"
                            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400" />
                        <Search class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <!-- Auth Section -->
                <div class="flex items-center gap-4">
                    <div v-if="authStore.user" class="relative">
                        <!-- Profile Button with Initials -->
                        <button
                            class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                            @click="toggleProfileMenu">
                            {{ userInitials }}
                        </button>

                        <!-- Profile Dropdown -->
                        <div v-if="showProfileMenu"
                            class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                            <p class="px-4 py-2 text-sm text-gray-700">
                                Hello, {{ authStore.user.name }}
                            </p>
                            <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                @click="logout">
                                Logout
                            </button>
                        </div>
                    </div>

                    <template v-else>
                        <!-- Login and Register Buttons (if not logged in) -->
                        <button @click="navigateToLogin" class="text-gray-700 hover:text-gray-900 font-medium">
                            Sign In
                        </button>
                        <button @click="navigateToRegister"
                            class="bg-[#C41E3A] text-white px-4 py-2 rounded-md hover:bg-[#A01830] transition-colors">
                            Create Account
                        </button>
                    </template>
                </div>
            </div>

            <!-- Search Bar for Small Screens -->
            <div class="mt-4 md:hidden">
                <div class="relative">
                    <input type="text" placeholder="Search for a course"
                        class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400" />
                    <Search class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { Search } from "lucide-vue-next";

const router = useRouter();
const authStore = useAuthStore();

const navigateToLogin = () => {
    router.push("/login");
};

const navigateToRegister = () => {
    router.push("/register");
};

// Toggle profile dropdown
const showProfileMenu = ref(false);
const toggleProfileMenu = () => {
    showProfileMenu.value = !showProfileMenu.value;
};

// User initials for profile button
const userInitials = computed(() => {
    if (authStore.user) {
        const nameParts = authStore.user.name.split(" ");
        return nameParts.map(part => part[0]).join("").toUpperCase();
    }
    return "";
});

// Logout action
const logout = async () => {
    await authStore.logout();
    showProfileMenu.value = false;
    alert("You have been logged out!");
};
</script>
