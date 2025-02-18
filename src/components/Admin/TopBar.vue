<template>
    <nav class="bg-white py-4 px-6 relative w-full z-50 shadow-sm">
        <div class="max-w-7xl mx-auto">
            <!-- Navbar Main Row -->
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <router-link to="/">
                        <img src="/src/assets/Logo.png" alt="Logo" class="h-10 w-24" />
                    </router-link>
                </div>

                <!-- Auth Section -->
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <!-- Profile Button with Initials -->
                        <button
                            class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-300 transition-colors"
                            @click="toggleProfileMenu">
                            {{ userInitials }}
                        </button>

                        <!-- Profile Dropdown -->
                        <div v-if="showProfileMenu"
                            class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                            <p v-if="authStore.user" class="px-4 py-2 text-sm text-gray-700">
                                Hello, {{ authStore.user.name }}
                              </p>
                              <p v-else class="px-4 py-2 text-sm text-gray-700">
                                Hello, Guest
                              </p>
                            <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                @click="logout">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

// Redirect to home if the user is not authenticated
onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push("/");
  }
});

// Toggle profile dropdown
const showProfileMenu = ref(false);
const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value;
};

// User initials for profile button
const userInitials = computed(() => {
  if (authStore.user && authStore.user.name) {
    const nameParts = authStore.user.name.split(" ");
    return nameParts.map(part => part[0]).join("").toUpperCase();
  }
  return "G"; // Default to "G" for "Guest" or any fallback initials
});

// Logout action
const logout = async () => {
  await authStore.logout();
  showProfileMenu.value = false;
  alert("You have been logged out!");
  router.push(""); // Redirect to home after logout
};
</script>