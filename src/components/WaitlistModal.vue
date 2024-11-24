<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black text-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="closeModal">
        <div class="bg-white rounded-lg p-6 w-full max-w-md transform transition-all duration-300"
            :class="{ 'opacity-100 scale-100': isVisible, 'opacity-0 scale-90': !isVisible }">
            <h2 class="text-2xl font-bold mb-4 text-center">Join Our Waitlist</h2>
            <p class="text-gray-600 text-center mb-6">
                Be the first to experience PodAI. Sign up now and get exclusive early access and updates.
            </p>
            <form @submit.prevent="submitWaitlist">
                <input v-model="email" type="email" placeholder="Enter your email" required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
                <button type="submit"
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Join Waitlist
                </button>
            </form>
            <p v-if="submitted" class="mt-4 text-center animate-fade-in-bounce flex flex-col">
                <span class="text-dark">Thank you! You're on the list.</span>
                <span>We'll be in touch soon.</span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const email = ref('');
const submitted = ref(false);

const submitWaitlist = () => {
    // Handle waitlist submission logic here (e.g., API call)
    submitted.value = true;
    setTimeout(() => {
        submitted.value = false;
        closeModal();
    }, 2000);
};

// Props for controlling modal visibility
const props = defineProps({
    isVisible: Boolean,
});

const emit = defineEmits(['close']);

// Close modal method
const closeModal = () => {
    emit('close');
};

// Disable scroll when modal is open
onMounted(() => {
    if (props.isVisible) document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>

<style scoped>
/* Microanimation for success message */
@keyframes fadeInBounce {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    50% {
        opacity: 1;
        transform: translateY(5px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Applying animation to success message */
.animate-fade-in-bounce {
    animation: fadeInBounce 1s ease;
}
</style>