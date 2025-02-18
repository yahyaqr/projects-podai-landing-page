<template>
    <aside class="w-64 bg-white border-r flex flex-col">
        <!-- Sidebar Header -->
        <div class="p-4 border-b">
            <div class="flex items-center gap-2">
                <div class="relative flex-1">
                    <Search class="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Search courses..." :value="searchQuery"
                        @input="$emit('update:searchQuery', $event.target.value)"
                        class="w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button @click="createNewCourse" class="p-2 rounded-md border hover:bg-gray-50" title="New course">
                    <Plus class="h-4 w-4" />
                </button>
            </div>
        </div>

        <!-- Course List -->
        <div class="flex-1 overflow-auto p-4 space-y-6">
            <!-- Upcoming Courses -->
            <section>
                <h2 class="text-xs font-semibold text-gray-500 mb-3">UPCOMING COURSES</h2>
                <ul class="space-y-1">
                    <li v-for="course in filteredUpcomingCourses" :key="course.id">
                        <button @click="selectCourse(course, 'upcoming')"
                            class="w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm" :class="{
                        'bg-blue-50 text-blue-600': selectedCourse?.id === course.id && selectedCourseType === 'upcoming',
                        'hover:bg-gray-50': selectedCourse?.id !== course.id || selectedCourseType !== 'upcoming',
                    }">
                            <FileText class="h-4 w-4" />
                            <span class="truncate">{{ course.title }}</span>
                        </button>
                    </li>
                </ul>
            </section>

            <!-- Pre-recorded Courses -->
            <section>
                <h2 class="text-xs font-semibold text-gray-500 mb-3">PRE-RECORDED COURSES</h2>
                <ul class="space-y-1">
                    <li v-for="course in filteredPreRecordedCourses" :key="course.id">
                        <button @click="selectCourse(course, 'pre-recorded')"
                            class="w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm" :class="{
                        'bg-red-50 text-red-600': selectedCourse?.id === course.id && selectedCourseType === 'pre-recorded',
                        'hover:bg-gray-50': selectedCourse?.id !== course.id || selectedCourseType !== 'pre-recorded',
                    }">
                            <FileText class="h-4 w-4" />
                            <span class="truncate">{{ course.title }}</span>
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    </aside>
</template>

<script setup>
import { computed } from 'vue';
import { FileText, Search, Plus } from 'lucide-vue-next';

const props = defineProps({
    upcomingCourses: Array, // Array of upcoming courses
    preRecordedCourses: Array, // Array of pre-recorded courses
    selectedCourse: Object, // Currently selected course
    selectedCourseType: String, // Type of the selected course: "upcoming" or "pre-recorded"
    searchQuery: String, // Search query for filtering
});

const emit = defineEmits(['update:selectedCourse', 'update:selectedCourseType', 'update:searchQuery', 'createCourse']);

// Computed properties for filtering courses
const filteredUpcomingCourses = computed(() => {
    if (!props.searchQuery) return props.upcomingCourses;

    const query = props.searchQuery.toLowerCase();
    return props.upcomingCourses.filter((course) =>
        course.title.toLowerCase().includes(query) ||
        course.subject.toLowerCase().includes(query)
    );
});

const filteredPreRecordedCourses = computed(() => {
    if (!props.searchQuery) return props.preRecordedCourses;

    const query = props.searchQuery.toLowerCase();
    return props.preRecordedCourses.filter((course) =>
        course.title.toLowerCase().includes(query) ||
        course.subject.toLowerCase().includes(query)
    );
});

// Emit selected course and its type
const selectCourse = (course, type) => {
    emit('update:selectedCourse', course);
    emit('update:selectedCourseType', type);
};

// Emit create new course action
const createNewCourse = () => {
    emit('createCourse');
};
</script>