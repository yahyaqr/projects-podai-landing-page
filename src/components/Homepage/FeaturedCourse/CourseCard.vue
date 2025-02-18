<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- Banner -->
        <div :class="[course.bannerColor, 'h-32 md:h-40']"></div>

        <!-- Content -->
        <div class="p-3 md:p-4">
            <h3 class="font-semibold text-sm md:text-base mb-2 md:mb-3 line-clamp-2">
                {{ course.title }}
            </h3>

            <div class="flex items-center justify-between">
                <span class="font-semibold text-sm md:text-base">{{ course.price }}</span>
                <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Enroll
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Clock, Circle } from 'lucide-vue-next'

defineProps({
    course: {
        type: Object,
        required: true
    }
})
</script>
