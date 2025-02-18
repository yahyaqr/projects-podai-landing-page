<template>
    <section class="px-6 py-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold mb-6">Featured Courses</h2>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
                <CourseCard v-for="course in courses" :key="course.id" :course="course" />
            </div>
        </div>
    </section>
</template>

<script setup>
import CourseCard from './CourseCard.vue'

const courses = [
    {
        id: 1,
        title: "Corruption Case Study: The Jakarta Infrastructure Project",
        duration: "10 hours",
        type: "Pre-recorded",
        price: "Rp 79.000",
        bannerColor: "bg-red-600"
    },
    {
        id: 2,
        title: "Intellectual Property Dispute: Traditional Knowledge vs. Modern Patents",
        duration: "2 hours",
        type: "Upcoming",
        price: "Rp 79.000",
        bannerColor: "bg-blue-600"
    },
    {
        id: 3,
        title: "Environmental Law Case: The Borneo Deforestation Lawsuit",
        duration: "2 hours",
        type: "Pre-recorded",
        price: "Rp 79.000",
        bannerColor: "bg-green-600"
    },
    {
        id: 4,
        title: "Corporate Law: Business Entity Formation",
        duration: "5 hours",
        type: "Pre-recorded",
        price: "Rp 79.000",
        bannerColor: "bg-purple-600"
    },
    {
        id: 5,
        title: "Human Rights Law: International Treaties",
        duration: "8 hours",
        type: "Upcoming",
        price: "Rp 79.000",
        bannerColor: "bg-yellow-600"
    }
]
</script>
