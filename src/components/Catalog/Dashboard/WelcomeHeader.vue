<template>
    <h1 class="text-3xl font-bold flex items-center gap-2 mb-8">
        Welcome {{ name }} <span class="animate-wave">👋</span>
    </h1>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.animate-wave {
    display: inline-block;
    animation: wave 2s infinite;
    transform-origin: 70% 70%;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(14deg);
    }

    20% {
        transform: rotate(-8deg);
    }

    30% {
        transform: rotate(14deg);
    }

    40% {
        transform: rotate(-4deg);
    }

    50% {
        transform: rotate(10deg);
    }

    60% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>