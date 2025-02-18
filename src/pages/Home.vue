<template>
    <div class="min-h-screen">
        <Hero />
        <FeaturedCourses />
        <ClientExperiences />
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Homepage/Hero.vue'
import FeaturedCourses from '../components/Homepage/FeaturedCourse/Index.vue'
import ClientExperiences from '../components/Homepage/ClientExperiences/Index.vue'
import Footer from '../components/Footer.vue'
</script>