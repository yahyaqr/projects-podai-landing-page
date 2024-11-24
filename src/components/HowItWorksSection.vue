<template>
    <section id="how-it-works" class="py-20 bg-black/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-3xl font-bold text-white mb-12">How PodAI Works</h3>

            <!-- Steps Container -->
            <div class="flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 lg:space-x-4">

                <!-- Step Item -->
                <div v-for="(step, index) in steps" :key="index" class="relative w-full lg:w-1/5">
                    <div
                        class="hover:bg-white/5 rounded h-60 lg:h-72 text-white px-4 sm:px-6 py-8 transform transition-all duration-300 hover:scale-105">
                        <div class="flex flex-col items-center">
                            <!-- Step Number -->
                            <div
                                class="w-12 h-12 flex items-center justify-center mb-4 text-lg lg:text-4xl font-semibold">
                                {{ index + 1 }}
                            </div>
                            <!-- Step Title -->
                            <h4 class="text-lg lg:text-xl font-semibold mb-2">{{ step.title }}</h4>
                            <!-- Step Description -->
                            <p class="text-gray-200 text-sm lg:text-base leading-relaxed max-w-xs mx-auto">{{
                    step.description }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    steps: Array
});
</script>