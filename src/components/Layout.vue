<template>
    <div>
        <Navbar />

        <Sidebar />

        <main>
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
</script>