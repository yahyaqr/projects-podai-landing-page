<template>
    <section id="testimonials" class="py-20 bg-gray-900/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-3xl font-bold mb-4">What Our Users Are Saying</h3>
            <p class="text-gray-400 mb-12">
                See how PodAI has helped creators and brands streamline their podcast production.
            </p>

            <div class="overflow-hidden relative">
                <div class="flex animate-scroll space-x-8">
                    <div v-for="(testimonial, index) in testimonials.concat(testimonials)" :key="index"
                        class="bg-black/20 hover:bg-black/50 rounded-lg p-6 w-80 flex-shrink-0">
                        <p class="text-lg font-semibold text-white mb-2">“{{ testimonial.quote }}”</p>
                        <p class="text-gray-400 text-sm">— {{ testimonial.author }}, {{ testimonial.company }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    testimonials: Array
});
</script>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    display: flex;
    animation: scroll 30s linear infinite;
}

.overflow-hidden {
    height: 200px;
}
</style>