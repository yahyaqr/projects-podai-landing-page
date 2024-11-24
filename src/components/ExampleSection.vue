<template>
    <section id="example" class="py-20 relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 class="text-3xl font-bold mb-4">Creating a podcast doesn't have to be hard.</h3>
            <p class="text-gray-500 mt-4">
                PodAI automates podcasting with AI, allowing you to focus on designing your content while we handle the
                details.
            </p>

            <!-- Video Section -->
            <div class="relative mt-8 aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe class="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/FsztuzyXdhY?si=YrVbMP6T8txSUp3v" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <!-- Background Light Effects -->
        <div class="absolute inset-0 -z-10">
            <div class="blur-light bg-light-1"></div>
            <div class="blur-light bg-light-2"></div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
/* Styling for Background Blurred Lights */
.blur-light {
    position: absolute;
    width: 300px;
    /* Subtle size for a focused glow effect */
    height: 300px;
    border-radius: 50%;
    filter: blur(150px);
    /* Moderate blur for soft light */
    opacity: 0.4;
    /* Lower opacity for subtle effect */
    animation: smoothRotate 5s linear infinite;
}

.bg-light-1 {
    background-color: #4f46e5;
    /* Blue light */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.bg-light-2 {
    background-color: #ec4899;
    /* Pink light */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 5s;
    /* Halfway delay for staggered rotation */
}

/* Smooth Circular Rotation Animation */
@keyframes smoothRotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
    }
}
</style>
