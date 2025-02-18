<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
        <!-- Top Bar -->
        <TopBar :selected-file="selectedFile" default-title="Markdown Dashboard" />

        <div class="flex flex-1">
            <!-- Left Sidebar -->
            <LeftSidebar :files="files" :selected-file="selectedFile" :search-query="searchQuery"
                @update:selectedFile="selectFile" @createFile="createNewFile"
                @update:searchQuery="searchQuery = $event" />

            <!-- Main Content -->
            <main class="flex-1">
                <ContentArea :selected-file="selectedFile" />
            </main>

            <!-- Right Sidebar (YAML Editor) -->
            <RightSidebar v-if="selectedFile" :selected-file="selectedFile" @addField="addYamlField" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from '../components/Admin/TopBar.vue'
import LeftSidebar from '../components/Admin/LeftSidebar.vue'
import RightSidebar from '../components/Admin/RightSidebar.vue'
import ContentArea from '../components/Admin/ContentArea.vue'
import { data } from '../components/Admin/data/index.js'

const files = ref(data);

const selectedFile = ref(null)
const searchQuery = ref('')

// Methods
const selectFile = (file) => {
    selectedFile.value = file
}

const createNewFile = () => {
    const newFile = {
        id: String(files.value.length + 1),
        title: `New File ${files.value.length + 1}`,
        content: "",
        yaml: {
            title: `New File ${files.value.length + 1}`,
            author: "Current User",
            date: new Date().toISOString().split('T')[0],
            tags: "",
            status: "draft"
        }
    }
    files.value.push(newFile)
    selectFile(newFile)
}

const addYamlField = () => {
    if (selectedFile.value) {
        const fieldName = prompt("Enter the name of the new field:")
        if (fieldName && !selectedFile.value.yaml.hasOwnProperty(fieldName)) {
            selectedFile.value.yaml[fieldName] = ""
        }
    }
}
</script>