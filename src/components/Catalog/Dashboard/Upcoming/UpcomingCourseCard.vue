<template>
    <a :href="href" class="flex flex-col sm:flex-row gap-4 p-4 my-2 transition-colors duration-200 hover:bg-gray-200">
        <!-- Card Image/Color Block -->
        <div :class="['w-full sm:w-64 h-40 rounded-lg flex-shrink-0', color]"></div>

        <!-- Card Content -->
        <div class="flex-grow">
            <!-- Course Status -->
            <div class="text-sm sm:text-base mb-2 font-medium text-gray-600">
                {{ status === 'Upcoming' ? 'Coming Soon' : 'Available Now' }} ({{ eventDate }})
            </div>

            <!-- Course Title -->
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>

            <template v-if="status === 'Upcoming'">
                <CountdownClock :targetDate="eventDate" />
            </template>

            <template v-if="status === 'Available Now'">
                <div class="mt-6">
                    <button
                        class="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors duration-200">
                        Start Learning
                    </button>
                </div>
            </template>
        </div>
    </a>
</template>

<script setup>
import CountdownClock from './CountdownClock.vue'; // Import the CountdownClock component

const { title, status, eventDate, color, href } = defineProps({
    title: { type: String, required: true },
    status: { type: String, required: true },
    eventDate: { type: String, required: true },
    color: String,
    href: { type: String, required: true },
});
</script>

<style scoped>
/* Optional global styles or overrides */
</style>