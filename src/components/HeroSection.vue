<template>
    <section id="hero" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-5xl font-bold leading-tight mb-6">Create Your Own Digital Talkshow Content!</h2>
                <p class="text-gray-400 text-lg mb-8">
                    Design your show's outline, AI hosts, and publishing schedule. We'll handle the research, creation,
                    and global publishing.
                </p>
                <button @click="$emit('openWaitlistModal')"
                    class="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition-colors text-lg font-semibold">
                    Join Waitlist
                </button>
            </div>

            <!-- 3D Hover Effect Section -->
            <div class="relative">
                <div ref="hoverElement"
                    class="aspect-video bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300"
                    @mousemove="handleMouseMove" @mouseleave="resetTransform">
                    <!-- Placeholder for the image (add your image here) -->
                    <img src="https://espeo.eu/wp-content/uploads/2022/04/Green-tech-what-it-is-about-and-why-you-should-keep-an-eye-on-its-development-in-2022.jpg"
                        alt="Demo Image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const hoverElement = ref(null);

// Handles the 3D rotation based on mouse position
const handleMouseMove = (event) => {
    const { offsetX, offsetY, target } = event;
    const { clientWidth, clientHeight } = target;

    // Calculate rotation based on mouse position
    const rotationX = ((offsetY - clientHeight / 2) / clientHeight) * 20;
    const rotationY = ((offsetX - clientWidth / 2) / clientWidth) * -20;

    hoverElement.value.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

// Reset the 3D rotation when the mouse leaves the element
const resetTransform = () => {
    hoverElement.value.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
};
</script>

<style scoped>
/* Ensure smooth transition */
.aspect-video {
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
}
</style>