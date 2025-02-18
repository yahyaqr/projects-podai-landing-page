<template>
    <div class="border-b border-gray-200">
        <button class="w-full py-5 flex justify-between items-center text-left" @click="isOpen = !isOpen"
            :aria-expanded="isOpen">
            <span class="text-gray-900 font-medium">{{ question }}</span>
            <Plus v-if="!isOpen" class="h-5 w-5 text-gray-400 flex-shrink-0" />
            <Minus v-else class="h-5 w-5 text-gray-400 flex-shrink-0" />
        </button>

        <div v-show="isOpen" class="pb-5">
            <p class="text-gray-600">{{ answer }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

defineProps({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const isOpen = ref(false)
</script>
