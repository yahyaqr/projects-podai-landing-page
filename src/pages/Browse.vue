<template>
    <!-- Category Tabs -->
    <CategoryTabs @select="handleCategorySelect" />

    <!-- Course Grid Component -->
    <CourseGrid :courses="filteredCourses" :current-page="currentPage" :items-per-page="itemsPerPage"
        @enroll="handleEnroll" @page-change="handlePageChange" />

    <!-- Pagination -->
    <Pagination :current-page="currentPage" :total-pages="totalPages" @page="handlePageChange" />
</template>

<script setup>
import { ref, computed } from 'vue'
import CategoryTabs from '../components/Catalog/Browse/CategoryTabs.vue'
import Pagination from '../components/Catalog/Browse/Pagination.vue'
import CourseGrid from '../components/Catalog/Browse/CourseGrid.vue'
import { courses } from '../components/Catalog/Browse/data'

const currentPage = ref(1)
const selectedCategory = ref(null)
const itemsPerPage = 8

const filteredCourses = computed(() => {
    if (!selectedCategory.value) return courses
    return courses.filter(course => course.categoryId === selectedCategory.value)
})

const totalPages = computed(() => Math.ceil(filteredCourses.value.length / itemsPerPage))

const handleCategorySelect = (categoryId) => {
    selectedCategory.value = selectedCategory.value === categoryId ? null : categoryId
    currentPage.value = 1
}

const handlePageChange = (page) => {
    currentPage.value = page
}

const handleEnroll = (courseId) => {
    console.log('Enrolling in course:', courseId)
}
</script>
../components/Catalog/Search/data