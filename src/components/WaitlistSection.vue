<template>
    <section id="waitlist" class="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="text-3xl font-bold mb-4">Ready to join the waitlist?</h3>
            <p class="text-gray-400 ">Get instant access to our beta as soon as it's ready.</p>
            <p class="text-gray-400 mb-8">Be the first to experience our services.</p>
            <button @click="$emit('openWaitlistModal')"
                class="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition-colors text-lg font-semibold">Join
                Waitlist</button>
        </div>
    </section>
</template>