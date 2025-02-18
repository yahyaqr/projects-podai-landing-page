<template>
    <aside v-if="selectedCourse" class="w-64 bg-white border-l flex flex-col">
        <!-- Sidebar Header -->
        <div class="p-4 border-b">
            <h2 class="text-sm font-semibold">Course Details</h2>
            <p class="text-xs text-gray-500">Edit course-specific details</p>
        </div>

        <!-- Course Fields -->
        <div class="flex-1 overflow-auto p-4">
            <div class="space-y-4">
                <!-- Type -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Type</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.type" disabled type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div v-else>
                        <select v-model="selectedCourse.type"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled>Select type</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Pre-recorded">Pre-recorded</option>
                        </select>
                    </div>
                </div>

                <!-- Price -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Price</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.price" disabled type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div v-else>
                        <input v-model="selectedCourse.price" type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Rp 999.000" />
                    </div>
                </div>

                <!-- Category -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Category</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.category" disabled type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div v-else>
                        <select v-model="selectedCourse.category"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled>Select category</option>
                            <option value="Criminal Law">Criminal Law</option>
                            <option value="Corporate Law">Corporate Law</option>
                            <option value="Intellectual Property">Intellectual Property</option>
                        </select>
                    </div>
                </div>

                <!-- Program -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Program</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.program" disabled type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div v-else>
                        <select v-model="selectedCourse.program"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" disabled>Select program</option>
                            <option value="Anti-Corruption Studies">Anti-Corruption Studies</option>
                            <option value="Business Law Essentials">Business Law Essentials</option>
                            <option value="Intellectual Property Rights">Intellectual Property Rights</option>
                        </select>
                    </div>
                </div>

                <!-- Image Source -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Image Source</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.imageSource" disabled type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., /images/course-image.jpg" />
                    </div>
                    <div v-else>
                        <input v-model="selectedCourse.imageSource" type="text"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., /images/course-image.jpg" />
                    </div>
                </div>

                <!-- Event Date -->
                <div v-if="selectedCourse.type === 'Upcoming'">
                    <label class="block text-xs font-medium text-gray-700 mb-1">Event Date</label>
                    <div v-if="!isEditing">
                        <input v-model="selectedCourse.eventDate" disabled type="date"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div v-else>
                        <input v-model="selectedCourse.eventDate" type="date"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <!-- Chapters -->
                <div v-if="selectedCourse.type === 'Pre-recorded'">
                    <label class="block text-xs font-medium text-gray-700 mb-1">Chapters</label>
                    <div v-if="!isEditing">
                        <textarea v-model="selectedCourse.chapters" disabled
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter chapters as JSON" rows="3"></textarea>
                    </div>
                    <div v-else>
                        <textarea v-model="selectedCourse.chapters"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter chapters as JSON" rows="3"></textarea>
                    </div>
                </div>

                <!-- Instructors -->
                <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Instructors</label>
                    <div v-if="!isEditing">
                        <textarea v-model="selectedCourse.instructors" disabled
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter instructors as JSON" rows="3"></textarea>
                    </div>
                    <div v-else>
                        <textarea v-model="selectedCourse.instructors"
                            class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter instructors as JSON" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <!-- Save/Cancel Buttons in Edit Mode -->
        <div v-if="isEditing" class="p-4 border-t flex gap-2">
            <button @click="saveCourse"
                class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Save
            </button>
            <button @click="cancelEditing"
                class="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                Cancel
            </button>
        </div>

        <!-- Edit Button in Display Mode -->
        <div v-else class="p-4 border-t">
            <button @click="toggleEditing"
                class="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none">
                Edit
            </button>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    selectedCourse: Object, // Currently selected course
});

const emit = defineEmits(['saveCourse']);

const isEditing = ref(false);

const toggleEditing = () => {
    isEditing.value = !isEditing.value;
};

const saveCourse = () => {
    isEditing.value = false;
    emit('saveCourse', selectedCourse);
};

const cancelEditing = () => {
    isEditing.value = false;
    // Optionally, reset `selectedCourse` if necessary
};
</script>