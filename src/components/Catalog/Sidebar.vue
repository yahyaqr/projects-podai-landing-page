<template>
    <aside class="bg-white border-r border-gray-200 transition-all duration-300 flex flex-col" :class="{
        'w-16': isCollapsed || isSmallScreen,
        'w-48': !isCollapsed && !isSmallScreen,
        'hidden': isHidden,
    }">
        <!-- Navigation -->
        <!-- Navigation -->
        <nav class="flex-grow">
            <router-link to="/catalog/dashboard"
                class="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                :class="{ 'bg-gray-100': $route.path === '/catalog/dashboard' }">
                <div class="w-8 h-8 flex items-center justify-center">
                    <LayoutGrid class="w-5 h-5 text-gray-600" />
                </div>
                <span class="text-gray-700 transition-opacity duration-300 ml-2"
                    :class="{ 'hidden': isCollapsed || isSmallScreen }">
                    Dashboard
                </span>
            </router-link>

            <router-link to="/catalog/browse"
                class="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                :class="{ 'bg-gray-100': $route.path === '/catalog/browse' }">
                <div class="w-8 h-8 flex items-center justify-center">
                    <Shapes class="w-5 h-5 text-gray-600" />
                </div>
                <span class="text-gray-700 transition-opacity duration-300 ml-2"
                    :class="{ 'hidden': isCollapsed || isSmallScreen }">
                    Browse
                </span>
            </router-link>
        </nav>
    </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { LayoutGrid, Shapes } from "lucide-vue-next";
import { useRoute } from "vue-router";

// Reactive state for sidebar
const isCollapsed = ref(false);
const isHidden = ref(false);
const isSmallScreen = ref(false);

const route = useRoute();

// Show the sidebar again (useful for mobile navigation)
const showSidebar = () => {
    isHidden.value = false;
};

// Detect small screen sizes and auto-collapse
const handleResize = () => {
    const screenWidth = window.innerWidth;

    // Small screen breakpoint
    isSmallScreen.value = screenWidth <= 768;

    // Auto-collapse sidebar on small screens
    if (isSmallScreen.value) {
        isCollapsed.value = true;
        isHidden.value = false; // Ensure it's visible in collapsed mode
    } else {
        // On wider screens, reset to default desktop state
        isCollapsed.value = false;
        isHidden.value = false;
    }
};

// Add event listener for resize
onMounted(() => {
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
});

// Remove event listener on unmount
onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Styles for the sidebar toggle button */
button {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>