<template>
    <div class="scroll-container overflow-hidden relative">
        <!-- Scroll Track -->
        <div class="scroll-track" :class="`scroll-${speed}`">
            <!-- Scroll Content -->
            <div class="scroll-content">
                <!-- Duplicate testimonials for infinite scrolling -->
                <div v-for="(testimonial, index) in [...testimonials, ...testimonials]"
                    :key="`${index}-${testimonial.name}`"
                    :class="[testimonial.bgColor, 'rounded-xl px-6 py-3 flex items-center gap-4 shadow-md whitespace-nowrap']">
                    <!-- Avatar -->
                    <div class="w-10 h-10 relative rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                        :style="!testimonial.profileImage ? { backgroundColor: testimonial.profileColor } : null">
                        <template v-if="testimonial.profileImage">
                            <img :alt="`@${testimonial.name}'s avatar`" :src="testimonial.profileImage"
                                class="object-cover absolute inset-0 w-full h-full" />
                        </template>
                        <template v-else>
                            <span class="text-black text-sm font-semibold">
                                {{ testimonial.name.charAt(0).toUpperCase() }}
                            </span>
                        </template>
                    </div>
                    <!-- Text Content -->
                    <div class="flex flex-col">
                        <p class="text-gray-800 font-medium truncate">{{ testimonial.text }}</p>
                        <span class="text-gray-600 text-sm">@{{ testimonial.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    testimonials: {
        type: Array,
        required: true,
    },
    speed: {
        type: String,
        default: 'medium', // Supports: 'fast', 'medium', 'slow'
    },
});
</script>

<style scoped>
/* Scroll Container with mask effect */
.scroll-container {
    margin: 2rem 0;
    mask-image: linear-gradient(to right,
            transparent,
            black 20%,
            black 80%,
            transparent);
    -webkit-mask-image: linear-gradient(to right,
            transparent,
            black 20%,
            black 80%,
            transparent);
}

/* Scroll Track ensures horizontal scrolling */
.scroll-track {
    display: flex;
    width: fit-content;
    overflow: hidden;
    position: relative;
}

/* Scroll Content for continuous scrolling */
.scroll-content {
    display: flex;
    gap: 1.5rem;
    /* Added gap between cards */
    animation: scroll linear infinite;
    animation-duration: var(--duration);
}

.scroll-fast {
    --duration: 20s;
}

.scroll-medium {
    --duration: 25s;
}

.scroll-slow {
    --duration: 30s;
}

/* Infinite Scrolling Keyframes */
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>