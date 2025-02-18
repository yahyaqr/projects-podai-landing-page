<template>
    <section class="bg-gray-100 px-6 py-8 overflow-hidden">
        <div class="max-w-7xl mx-auto mb-6">
            <p class="text-gray-600 mb-2">12K+ Happy Clients</p>
            <h2 class="text-3xl font-bold text-gray-900">Client Experiences</h2>
        </div>

        <div class="space-y-6">
            <ScrollTrack speed="slow" :testimonials="trackOne" />
            <ScrollTrack speed="medium" :testimonials="trackTwo" />
            <ScrollTrack speed="slow" :testimonials="trackThree" />
        </div>
    </section>
</template>

<script setup>
import ScrollTrack from './ScrollTrack.vue'
import { trackOne, trackTwo, trackThree } from './data.js'
</script>
