<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <!-- Top Bar -->
        <TopBar :selected-course="selectedCourse" default-title="Course Dashboard" />

        <div class="flex flex-1">
            <!-- Left Sidebar -->
            <LeftSidebar :upcoming-courses="upcomingCourses" :pre-recorded-courses="preRecordedCourses"
                :selected-course="selectedCourse" :search-query="searchQuery" @update:selectedCourse="selectCourse"
                @createCourse="createNewCourse" @update:searchQuery="searchQuery = $event" />

            <!-- Main Content -->
            <main class="flex-1">
                <ContentArea :selected-course="selectedCourse" :selected-course-type="selectedCourseType"
                    @saveContent="saveContent" />
            </main>

            <!-- Right Sidebar (Dynamic Editor) -->
            <RightSidebar :selected-course="selectedCourse" :selected-course-type="selectedCourseType"
                @saveCourse="handleSaveCourse" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCourseStore } from '../stores/courseStore';
import {
    selectCourseLogic,
    createNewCourseLogic,
    saveContentLogic,
    handleSaveCourseLogic,
} from '../utils/adminUtils'; // Import utils

// Components
import TopBar from '../components/Admin/TopBar.vue';
import LeftSidebar from '../components/Admin/LeftSidebar.vue';
import RightSidebar from '../components/Admin/RightSidebar.vue';
import ContentArea from '../components/Admin/ContentArea.vue';

// Pinia store
const courseStore = useCourseStore();

// Reactive state
const selectedCourse = ref(null);
const selectedCourseType = ref(null);
const searchQuery = ref('');

// Computed state
const upcomingCourses = courseStore.upcomingCourses;
const preRecordedCourses = courseStore.preRecordedCourses;

// Load courses on mount
onMounted(() => {
    courseStore.loadCourses();
});

// Event handlers
const selectCourse = (course, type) => selectCourseLogic(selectedCourse, selectedCourseType, course, type);

const createNewCourse = async (type) => await createNewCourseLogic(type, selectedCourse, selectedCourseType, courseStore);

const saveContent = async () => await saveContentLogic(selectedCourse, courseStore);

const handleSaveCourse = async (course) => await handleSaveCourseLogic(course, courseStore);
</script>