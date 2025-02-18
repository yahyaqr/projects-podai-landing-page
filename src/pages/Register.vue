<template>
    <div class="min-h-screen grid lg:grid-cols-2">
        <!-- Left Section -->
        <div class="hidden lg:flex bg-[#C41E3A] text-white p-12 flex-col relative overflow-hidden">
            <div class="max-w-lg">
                <h1 class="text-5xl font-bold mb-6">Diversity drives innovation</h1>
                <p class="text-xl">Join our startup programs and be part of the winning team!</p>
            </div>
            <!-- Decorative Grid -->
            <div class="absolute inset-0 flex items-center justify-center opacity-10">
                <div class="grid grid-cols-7 gap-4">
                    <div v-for="n in 14" :key="n" class="w-16 h-16 border-2 border-white rounded-lg"></div>
                </div>
            </div>
        </div>

        <!-- Right Section -->
        <div class="flex items-center justify-center p-6 lg:p-12">
            <div class="w-full max-w-md">
                <h2 class="text-2xl font-bold mb-2">Create Account</h2>
                <p class="text-gray-600 mb-8">Join our community today!</p>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- Name Input -->
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div class="relative">
                            <input id="name" v-model="name" type="text" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent pl-10"
                                placeholder="John Doe" />
                            <User class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div class="relative">
                            <input id="email" v-model="email" type="email" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent pl-10"
                                placeholder="you@example.com" />
                            <Mail class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent pl-10"
                                placeholder="••••••••" />
                            <Lock class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                                <Eye v-if="!showPassword" class="h-5 w-5" />
                                <EyeOff v-else class="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit"
                        class="w-full bg-[#C41E3A] text-white py-2 px-4 rounded-md hover:bg-[#A01830] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-2">
                        Create Account
                    </button>
                </form>

                <!-- Links -->
                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Already have an account?
                        <router-link to="/login" class="text-[#C41E3A] hover:text-[#A01830]">Sign in</router-link>
                    </p>
                </div>

                <div class="mt-8">
                    <router-link to="/" class="inline-flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft class="h-4 w-4 mr-2" />
                        Back to Home
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, User } from "lucide-vue-next";

// Router and Auth Store
const router = useRouter();
const authStore = useAuthStore();

// Form fields
const name = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);

// Handle form submission
const handleSubmit = async () => {
    const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    try {
        const result = await authStore.register(userData);
        if (result.success) {
            console.log("Registration successful");
            router.push("/login"); // Redirect to login page after successful registration
        } else {
            console.error("Registration failed:", result.error);
            alert(result.error); // Show error message to the user
        }
    } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
    }
};
</script>
