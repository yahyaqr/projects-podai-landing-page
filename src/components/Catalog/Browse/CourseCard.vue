<template>
    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <!-- Course Banner -->
        <div class="h-48 w-full" :style="{ backgroundColor: course.color }"></div>

        <!-- Course Content -->
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ course.title }}</h3>

            <div class="flex items-center gap-2 mb-4">
                <ClockIcon class="w-4 h-4 text-gray-500" />
                <span class="text-sm text-gray-600">{{ course.duration }}</span>
                <span class="ml-auto text-sm px-2 py-1 rounded-full" :class="typeClasses">
                    {{ course.type }}
                </span>
            </div>

            <div class="flex items-center justify-between">
                <span class="text-lg font-semibold">Rp {{ course.price }}</span>
                <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    @click="$emit('enroll', course.id)">
                    Enroll
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { ClockIcon } from 'lucide-vue-next'

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
})

defineEmits(['enroll'])

const typeClasses = computed(() => ({
    'bg-purple-100 text-purple-700': props.course.type === 'Pre-recorded',
    'bg-blue-100 text-blue-700': props.course.type === 'Upcoming',
    'bg-green-100 text-green-700': props.course.type === 'Class'
}))
</script>