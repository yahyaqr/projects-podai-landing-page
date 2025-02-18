<template>
    <a :href="href"
        class="flex flex-col sm:flex-row gap-4 p-4 my-2 rounded-lg transition-colors duration-200 hover:bg-gray-200">
        <!-- Card Image/Color Block -->
        <div :class="['w-full sm:w-64 h-40 rounded-lg flex-shrink-0 transition-shadow duration-200', color]"></div>

        <!-- Card Content -->
        <div class="flex-grow">
            <h3 class="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {{ title }}
            </h3>
            <div class="text-gray-500 mb-2 text-sm sm:text-base">{{ status }}</div>

            <!-- Pre-recorded Course Information -->
            <div class="flex items-center gap-4 mb-3 flex-wrap">
                <div class="flex items-center gap-1">
                    <BookOpenIcon class="w-4 h-4" />
                    <span class="text-xs sm:text-sm">
                        {{ chapters }} Chapter{{ chapters > 1 ? "s" : "" }}
                    </span>
                </div>
                <div class="flex items-center gap-1">
                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span class="text-xs sm:text-sm">{{ subject }}</span>
                </div>
            </div>
            <div class="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="absolute left-0 top-0 h-full bg-gray-300 rounded-full" :style="{ width: `${progress}%` }">
                </div>
            </div>
            <div class="text-xs sm:text-sm text-gray-500 mt-1">Progress: {{ progress }}%</div>
        </div>
    </a>
</template>

<script setup>
import { BookOpenIcon } from 'lucide-vue-next'

// Props definition
defineProps({
    title: String,
    status: String,
    chapters: Number,
    subject: String,
    progress: Number,
    color: String,
    href: String
})
</script>

<style scoped>
/* Add any additional styles specific to this card */
</style>
