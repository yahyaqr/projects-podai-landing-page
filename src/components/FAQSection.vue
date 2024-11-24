<template>
    <section id="faq" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h3>
            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="bg-black/20 rounded-lg p-6 cursor-pointer transition-all duration-300"
                    @click="toggleAnswer(index)">
                    <div class="flex items-center justify-between">
                        <h4 class="font-semibold text-white">{{ faq.question }}</h4>
                        <svg :class="{ 'transform rotate-180': activeIndex === index }"
                            class="w-6 h-6 text-gray-400 transition-transform duration-300" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </div>
                    <transition name="fade">
                        <p v-if="activeIndex === index" class="text-gray-400 mt-4">{{ faq.answer }}</p>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    faqs: Array
});

// State to track which FAQ is expanded
const activeIndex = ref(null);

// Toggle function for expanding/collapsing answers
const toggleAnswer = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>