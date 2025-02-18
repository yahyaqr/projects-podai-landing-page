<template>
    <div class="flex-1 h-full p-6 overflow-auto">
        <!-- Course Details -->
        <div v-if="selectedCourse" class="bg-white rounded-lg shadow p-6 space-y-6">
            <!-- Course Header with Title and Action Buttons -->
            <div class="flex items-center justify-between border-b pb-4">
                <!-- Title (Display or Edit) -->
                <div v-if="!isEditing" class="w-full">
                    <input v-model="selectedCourse.title" disabled type="text"
                        class="w-full px-4 py-2 text-lg font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Course title" />
                </div>
                <div v-else class="w-full">
                    <input v-model="selectedCourse.title" type="text"
                        class="w-full px-4 py-2 text-lg font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Course title" />
                </div>
            </div>

            <!-- Description (Display or Edit) -->
            <div>
                <!-- Display Mode -->
                <textarea v-if="!isEditing" disabled v-model="selectedCourse.description"
                    class="w-full h-40 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add course description here..."></textarea>
                <!-- Edit Mode -->
                <textarea v-else v-model="selectedCourse.description"
                    class="w-full h-40 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add course description here..."></textarea>
            </div>

            <!-- Save/Cancel Buttons in Edit Mode -->
            <div v-if="isEditing" class="mt-4 flex gap-2">
                <button @click="saveCourse"
                    class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Save
                </button>
                <button @click="cancelEditing"
                    class="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                    Cancel
                </button>
            </div>
            <!-- Action Buttons -->
            <div v-else class="flex">
                <button @click="toggleEditing"
                    class="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                    Edit
                </button>
            </div>
        </div>

        <!-- No Course Selected -->
        <div v-else class="h-full flex flex-col items-center justify-center text-gray-500">
            <FileText class="h-12 w-12 mb-4" />
            <h2 class="text-xl font-semibold mb-2">Select a course to edit</h2>
            <p class="text-sm">Choose a course from the sidebar to start editing</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { FileText, Edit, Settings } from "lucide-vue-next";

const props = defineProps({
    selectedCourse: Object, // The currently selected course
    selectedCourseType: String, // Type of the selected course: "upcoming" or "pre-recorded"
});

// State for editing mode
const isEditing = ref(false);

// Toggle editing mode
const toggleEditing = () => {
    isEditing.value = !isEditing.value;
};

// Save changes and exit editing mode
const saveCourse = () => {
    isEditing.value = false;
    console.log("Course saved:", selectedCourse);
    // Emit or call a method to save the changes to the backend if necessary
};

// Cancel editing mode and reset the values (optional)
const cancelEditing = () => {
    isEditing.value = false;
    console.log("Editing canceled");
    // Optionally reload the selectedCourse from the original state
};
</script>