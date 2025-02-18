<template>
    <WelcomeHeader :name="authStore.user.name" />
    <!-- Pass grouped courses as props -->
    <CourseList :upcoming-courses="upcomingCourses" :pre-recorded-courses="preRecordedCourses" />
</template>

<script setup>
import WelcomeHeader from '../components/Catalog/Dashboard/WelcomeHeader.vue';
import CourseList from '../components/Catalog/Dashboard/CourseList.vue';
import { upcomingCourses } from '../components/Catalog/Dashboard/Upcoming/UpcomingCourse';
import { preRecordedCourses } from '../components/Catalog/Dashboard/PreRecorded/PreRecordedCourse';

import { useAuthStore } from '../stores/authStore';
const authStore = useAuthStore();
</script>