<template>
    <footer class="bg-[#001529] text-white text-sm py-8">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Main Footer Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                <!-- Logo and Address Section -->
                <div>
                    <router-link to="/">
                        <img src="/src/assets/Logo-White.png" alt="Logo" class="h-12 w-32 mb-4" />
                    </router-link>
                    <div class="space-y-1">
                        <p>Fakultas Hukum, Universitas Padjajaran</p>
                        <p>Jl. Dipati Ukur No.35, Bandung, Jawa Barat 40132</p>
                    </div>
                </div>

                <!-- Help & FAQ and Contact Sections in Two Columns on Mobile -->
                <div class="md:col-span-2">
                    <div class="grid grid-cols-2 gap-6">
                        <!-- Help & FAQ Section -->
                        <div @click="navigateToFAQ"
                            class="p-4 bg-[#001529] rounded-lg hover:bg-[#002140] transition flex gap-4 items-start cursor-pointer">
                            <HelpCircle class="h-8 w-8 flex-shrink-0" />
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Help & FAQ</h3>
                                <p class="text-gray-300 mb-4 hidden md:block">
                                    Find answers to your questions.
                                </p>
                                <div class="text-white inline-flex items-center">
                                    Visit our FAQ Page
                                    <ArrowRight class="h-4 w-4 ml-2" />
                                </div>
                            </div>
                        </div>

                        <!-- Contact Section -->
                        <div @click="navigateToWhatsapp"
                            class="p-4 bg-[#001529] rounded-lg hover:bg-[#002140] transition flex gap-4 items-start cursor-pointer">
                            <MessageSquare class="h-8 w-8 flex-shrink-0" />
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Contact Us</h3>
                                <p class="text-gray-300 mb-4 hidden md:block">
                                    Let us know how we can assist you.
                                </p>
                                <div class="text-white inline-flex items-center">
                                    Chat on WhatsApp
                                    <ArrowRight class="h-4 w-4 ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="mt-8 pt-6 border-t border-gray-700">
                <p class="text-center text-gray-300">&copy; 2025 BerkasLegal. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToFAQ = () => {
    // Navigate to FAQ page directly
    router.push("/faq");
};

const navigateToWhatsapp = () => {
    // Open WhatsApp link
    window.open("https://wa.me/your-whatsapp-number", "_blank");
};
</script>