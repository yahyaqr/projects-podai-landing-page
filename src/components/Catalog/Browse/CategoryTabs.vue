<template>
    <!-- Tabs for large screens -->
    <div class="hidden sm:flex gap-4 mb-8 overflow-x-auto">
        <button v-for="category in categories" :key="category.id" :class="[
            'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors',
            selectedCategory === category.id
                ? 'bg-[#C41E3A] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
        ]" @click="selectCategory(category.id)">
            <component :is="category.icon" :class="[
            'w-5 h-5',
            selectedCategory === category.id ? 'text-white' : 'text-gray-600'
        ]" />
            <span class="whitespace-nowrap">{{ category.name }}</span>
        </button>
    </div>

    <!-- Dropdown for small screens -->
    <div class="sm:hidden mb-8">
        <label for="categoryFilter" class="block text-gray-700 mb-2">Select Category</label>
        <select id="categoryFilter" v-model="selectedCategory"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C41E3A] focus:outline-none"
            @change="emitCategoryChange">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { categories } from './data';

// Define the event this component emits
const emit = defineEmits(['select']);

// Track the currently selected category, default to "All Categories"
const selectedCategory = ref("");

// Handle selecting a category (for dropdown and tabs)
const selectCategory = (categoryId) => {
    selectedCategory.value = selectedCategory.value === categoryId ? "" : categoryId;
    emit('select', selectedCategory.value); // Emit the selected category or reset
};

// Emit change when using the dropdown
const emitCategoryChange = () => {
    emit('select', selectedCategory.value);
};
</script>
