<template>
    <div>
        <!-- Upcoming Courses Section -->
        <div v-if="upcomingCourses.length" class="mb-4">
            <div class="flex items-center gap-2 mb-2">
                <ClockIcon class="w-5 h-5 text-gray-600" />
                <h2 class="text-xl font-semibold">Upcoming</h2>
                <span class="text-xl font-light text-gray-400">({{ upcomingCourses.length }})</span>
            </div>
            <UpcomingCourseCard v-for="course in upcomingCourses" :key="course.id" :title="course.title"
                :status="course.status" :eventDate="course.eventDate" :color="course.color" :href="course.href"
                :daysUntilEvent="course.daysUntilEvent" />
        </div>

        <!-- Pre-recorded Courses Section -->
        <div v-if="preRecordedCourses.length" class="mb-4">
            <div class="flex items-center gap-2 mb-2">
                <ClockIcon class="w-5 h-5 text-gray-600" />
                <h2 class="text-xl font-semibold">Your Courses</h2>
                <span class="text-xl font-light text-gray-400">({{ preRecordedCourses.length }})</span>
            </div>
            <PreRecordedCourseCard v-for="course in preRecordedCourses" :key="course.id" v-bind="course" />
        </div>
    </div>
</template>

<script setup>
import { ClockIcon } from "lucide-vue-next";
import UpcomingCourseCard from "./Upcoming/UpcomingCourseCard.vue";
import PreRecordedCourseCard from "./PreRecorded/PreRecordedCourseCard.vue";

// Define props
defineProps({
    upcomingCourses: {
        type: Array,
        required: true,
    },
    preRecordedCourses: {
        type: Array,
        required: true,
    },
});
</script>
