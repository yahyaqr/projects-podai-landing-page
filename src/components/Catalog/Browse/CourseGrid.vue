<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CourseCard 
            v-for="course in paginatedCourses" 
            :key="course.id" 
            :course="course" 
            @enroll="$emit('enroll', course.id)" 
        />
    </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import CourseCard from './CourseCard.vue'

const props = defineProps({
    courses: {
        type: Array,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
    itemsPerPage: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['enroll', 'page-change'])

const paginatedCourses = computed(() => {
    const { courses, currentPage, itemsPerPage } = toRefs(props)
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return courses.value.slice(start, end)
})
</script>
