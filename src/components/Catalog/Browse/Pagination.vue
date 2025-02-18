<template>
    <div class="flex items-center justify-between mt-8">
        <span class="text-sm text-gray-600">
            Showing page {{ currentPage }} of {{ totalPages }}
        </span>
        <div class="flex items-center gap-2">
            <button class="px-3 py-1 border rounded hover:bg-gray-50 text-gray-600 disabled:opacity-50"
                :disabled="currentPage === 1" @click="$emit('page', 1)">
                First
            </button>
            <button class="px-3 py-1 border rounded hover:bg-gray-50 text-gray-600 disabled:opacity-50"
                :disabled="currentPage === 1" @click="$emit('page', currentPage - 1)">
                <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button v-for="page in pages" :key="page" class="px-3 py-1 border rounded"
                :class="page === currentPage ? 'bg-red-500 text-white' : 'hover:bg-gray-50 text-gray-600'"
                @click="$emit('page', page)">
                {{ page }}
            </button>
            <button class="px-3 py-1 border rounded hover:bg-gray-50 text-gray-600 disabled:opacity-50"
                :disabled="currentPage === totalPages" @click="$emit('page', currentPage + 1)">
                <ChevronRightIcon class="w-4 h-4" />
            </button>
            <button class="px-3 py-1 border rounded hover:bg-gray-50 text-gray-600 disabled:opacity-50"
                :disabled="currentPage === totalPages" @click="$emit('page', totalPages)">
                Last
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
})

defineEmits(['page'])

const pages = computed(() => {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
})
</script>