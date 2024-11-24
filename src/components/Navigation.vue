<template>
    <nav class="border-b border-white/10 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <h1 class="text-2xl font-bold">PodAI</h1>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#example" class="text-gray-300 hover:text-white transition-colors">Example</a>
                    <a href="#how-it-works" class="text-gray-300 hover:text-white transition-colors">How It Works</a>
                    <a href="#benefits" class="text-gray-300 hover:text-white transition-colors">Benefits</a>
                    <button @click="$emit('openWaitlistModal')"
                        class="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Join
                        Waitlist</button>
                </div>
                <button @click="$emit('toggleMobileMenu')" class="md:hidden text-gray-300 hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>