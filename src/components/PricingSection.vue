<template>
    <section id="pricing" class="py-20 text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-4xl font-extrabold mb-4">Pricing Plans</h3>
            <p class="text-gray-400 mb-12 max-w-2xl mx-auto">Choose a plan that suits your needs and budget with
                flexibility to grow as you do.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(plan, index) in pricingPlans" :key="index"
                    class="relative bg-black/20 rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">

                    <!-- Plan Details -->
                    <h4 class="text-2xl font-bold mb-2">{{ plan.name }}</h4>
                    <p class="text-gray-400 mb-4">{{ plan.description }}</p>
                    <p class="text-4xl font-bold mb-6">{{ plan.price }}</p>

                    <!-- Features List with Icons -->
                    <ul class="text-gray-400 list-none space-y-2 mb-6">
                        <li v-for="(feature, i) in plan.features" :key="i" class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z">
                                </path>
                            </svg>
                            {{ feature }}
                        </li>
                    </ul>

                    <!-- Action Button, Disabled for Pro Package -->
                    <button
                        class="w-full bg-gray-300 text-gray-600 font-semibold py-3 rounded-lg relative group cursor-not-allowed"
                        disabled>
                        Choose Plan
                        <!-- Tooltip -->
                        <span
                            class="tooltip absolute top-full mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100">
                            Not available yet
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    pricingPlans: Array
});
</script>

<style scoped>
.tooltip {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 0.5em;
    border-radius: 0.25em;
    font-size: 0.75em;
    white-space: nowrap;
    transition: opacity 0.2s ease-in-out;
}

button[disabled]:hover .tooltip {
    opacity: 1;
}
</style>
