<template>
    <section id="benefits" class="py-20 relative overflow-hidden">
        <div v-if="timeBlocks.length > 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <h3 class="text-3xl font-bold text-center mb-4">Save Hours of Your Time</h3>
            <p class="text-center text-gray-400 mb-12">Cut the chase with a summarized podcast created just for you.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(timeBlock, index) in timeBlocks" :key="timeBlock.id"
                    class="bg-black/20 backdrop-blur-sm rounded-lg p-6 hover:bg-black/50 transition-colors cursor-move"
                    draggable="true" @dragstart="onDragStart(index)">
                    <h4 class="text-xl font-semibold mb-2">{{ timeBlock.title }}</h4>
                    <p class="text-gray-400">{{ timeBlock.description }}</p>
                </div>
            </div>
        </div>

        <!-- Congratulatory Message when all cards are cleared -->
        <div v-else
            class="flex flex-col items-center justify-center text-center mx-auto max-w-5xl px-6 py-12 bg-black/20 rounded-lg shadow-md">
            <h3 class="text-4xl font-bold text-white mb-4">🎉 Congratulations! 🎉</h3>
            <p class="text-lg text-white mb-2">You've found PodAI! You've decluttered your tasks, and you're ready to
                save hours with personalized podcasts.</p>
            <p class="text-lg text-white mb-6">Let's keep the momentum going!</p>
        </div>

        <!-- Large trash bin -->
        <!-- Large trash bin, only visible when timeBlocks is not empty -->
        <div v-if="timeBlocks.length > 0"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer overflow-hidden transition-colors opacity-50"
            style="bottom: -15rem;" :class="{ 'wiggle': isWiggling }" @dragover.prevent="onDragOver"
            @dragleave="onDragLeave" @drop="onDrop">
            <svg height="400px" width="400px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path style="fill:#9B9B9B;"
                        d="M378.435,512h-244.87c-12.295,0-22.261-9.966-22.261-22.261l-11.13-333.913h311.652l-11.13,333.913 C400.696,502.034,390.729,512,378.435,512z">
                    </path>
                    <path style="fill:#666666;"
                        d="M136.348,64V30.609C136.348,13.731,150.078,0,166.957,0h178.087 c16.878,0,30.609,13.731,30.609,30.609V64c0,4.61-3.738,8.348-8.348,8.348c-4.61,0-8.348-3.738-8.348-8.348V30.609 c0-7.672-6.241-13.913-13.913-13.913H166.957c-7.672,0-13.913,6.241-13.913,13.913V64c0,4.61-3.738,8.348-8.348,8.348 C140.085,72.348,136.348,68.61,136.348,64z M189.217,214.261c-4.61,0-8.348,3.738-8.348,8.348v211.478 c0,4.61,3.738,8.348,8.348,8.348c4.61,0,8.348-3.738,8.348-8.348V222.609C197.565,217.998,193.828,214.261,189.217,214.261z M322.783,214.261c-4.61,0-8.348,3.738-8.348,8.348v211.478c0,4.61,3.738,8.348,8.348,8.348s8.348-3.738,8.348-8.348V222.609 C331.13,217.998,327.393,214.261,322.783,214.261z M256,214.261c-4.61,0-8.348,3.738-8.348,8.348v211.478 c0,4.61,3.738,8.348,8.348,8.348s8.348-3.738,8.348-8.348V222.609C264.348,217.998,260.61,214.261,256,214.261z M100.174,133.565 v22.261l0.742,22.261h310.168l0.741-22.261v-22.261H100.174z">
                    </path>
                    <path style="fill:#C1C1C1;"
                        d="M411.826,155.826H100.174c-12.295,0-22.261-9.966-22.261-22.261V77.913 c0-12.295,9.966-22.261,22.261-22.261h311.652c12.295,0,22.261,9.966,22.261,22.261v55.652 C434.087,145.86,424.121,155.826,411.826,155.826z">
                    </path>
                    <path style="fill:#DBDBDB;"
                        d="M434.087,77.913v22.261H77.913V77.913c0-12.295,9.966-22.261,22.261-22.261h311.652 C424.121,55.652,434.087,65.618,434.087,77.913z">
                    </path>
                </g>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import confetti from 'canvas-confetti';

const props = defineProps({
    timeBlocks: {
        type: Array,
        required: true,
    },
});

const draggedItemIndex = ref(null);
const isWiggling = ref(false);

const onDragStart = (index) => {
    draggedItemIndex.value = index;
};

const onDragOver = () => {
    isWiggling.value = true;
};

const onDragLeave = () => {
    isWiggling.value = false;
};

const onDrop = () => {
    if (draggedItemIndex.value !== null) {
        props.timeBlocks.splice(draggedItemIndex.value, 1);
        draggedItemIndex.value = null;

        // Trigger confetti if no cards left
        if (props.timeBlocks.length === 0) {
            triggerConfetti();
        }
    }
    isWiggling.value = false;
};

// Confetti function to celebrate when all cards are cleared
const triggerConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

</script>

<style scoped>
#benefits {
    position: relative;
}

@keyframes wiggle {

    0%,
    100% {
        transform: rotate(0deg) translateX(-50%);
    }

    25% {
        transform: rotate(-2deg) translateX(-50%);
    }

    50% {
        transform: rotate(2deg) translateX(-50%);
    }

    75% {
        transform: rotate(-2deg) translateX(-50%);
    }
}

.wiggle {
    animation: wiggle 0.5s ease-in-out infinite;
}
</style>
