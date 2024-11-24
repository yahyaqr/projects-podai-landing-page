<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <!-- Tech accent background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[100px]"></div>
        <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[100px]">
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <nav class="border-b border-white/10 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <div class="flex items-center">
              <h1 class="text-2xl font-bold">PodAI</h1>
            </div>

            <!-- Desktop Links -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#example" class="text-gray-300 hover:text-white transition-colors">Example</a>
              <a href="#how-it-works" class="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#benefits" class="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <button @click="openWaitlistModal"
                class="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Join Waitlist
              </button>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button @click="toggleMobileMenu" class="text-gray-300 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden">
          <div class="px-4 pt-2 pb-4 space-y-2">
            <a href="#example"
              class="block text-gray-300 hover:text-white rounded-lg transition-colors px-4 py-2 hover:bg-gray-700/60">Example</a>
            <a href="#how-it-works"
              class="block text-gray-300 hover:text-white rounded-lg transition-colors px-4 py-2 hover:bg-gray-700/60">How
              It Works</a>
            <a href="#benefits"
              class="block text-gray-300 hover:text-white rounded-lg transition-colors px-4 py-2 hover:bg-gray-700/60">Benefits</a>
            <button @click="openWaitlistModal"
              class="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section id="hero" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-5xl font-bold leading-tight mb-6">Create Your Own Digital Talkshow Content!</h2>
              <p class="text-gray-400 text-lg mb-8">
                Design your show's outline, AI hosts, and publishing schedule. We'll handle the research, creation, and
                global publishing.
              </p>
              <button @click="openWaitlistModal"
                class="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition-colors text-lg font-semibold">
                Join Waitlist
              </button>
            </div>
            <div class="relative">
              <div class="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Example Section -->
      <section id="example" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="mb-8">
            <h3 class="text-3xl font-bold">Creating a podcast doesn't have to be hard.</h3>
            <p class="text-gray-500 mt-4">PodAI automates podcasting with AI allowing you to focus on designing your
              content while we handle the details.</p>
          </div>
          <div class="relative">
            <div class="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <PlayIcon class="w-16 h-16 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section id="how-it-works" class="py-20 bg-gray-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, index) in steps" :key="index" class="relative">
              <div class="flex flex-col items-center text-center">
                <div
                  class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold mb-4">
                  {{ index + 1 }}
                </div>
                <h4 class="text-xl font-semibold mb-2">{{ step.title }}</h4>
                <p class="text-gray-400">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section id="benefits" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-3xl font-bold text-center mb-4">Save Hours of Your Time</h3>
          <p class="text-center text-gray-400 mb-12">Cut the chase with a summarized podcast created just for you.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(timeBlock, index) in timeBlocks" :key="index"
              class="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
              <h4 class="text-xl font-semibold mb-2">{{ timeBlock.title }}</h4>
              <p class="text-gray-400">{{ timeBlock.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Waitlist Section -->
      <section id="waitlist" class="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 class="text-3xl font-bold mb-4">Ready to join the waitlist?</h3>
          <p class="text-gray-400 mb-8">Get instant access to our beta as soon as it's ready. You'll be among the first
            to experience our services.</p>
          <button @click="openWaitlistModal"
            class="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition-colors text-lg font-semibold">
            Join Waitlist
          </button>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="border-t border-white/10 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold">PodAI</div>
          <div class="text-gray-400">© 2024 Vismaya AI Lab</div>
        </div>
      </div>
    </footer>

    <!-- Waitlist Modal -->
    <WaitlistModal :isVisible="isWaitlistModalOpen" @close="closeWaitlistModal" />
  </div>
</template>

<script setup>
import { PlayIcon } from 'lucide-vue-next'
import { ref } from 'vue';
import WaitlistModal from './components/WaitlistModal.vue';

const isMobileMenuOpen = ref(false);
const isWaitlistModalOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const openWaitlistModal = () => {
  isWaitlistModalOpen.value = true;
};

const closeWaitlistModal = () => {
  isWaitlistModalOpen.value = false;
};

const steps = [
  {
    title: 'Create An Account',
    description: 'Name your podcast and setup initial preferences'
  },
  {
    title: 'Add Personalization',
    description: 'Anything from your articles, publications, to videos'
  },
  {
    title: 'Preview the Result',
    description: 'Make adjustment and finishing touch'
  },
  {
    title: 'Subscribe to Your Brief',
    description: 'It will be automatically created and published'
  }
]

const timeBlocks = [
  {
    title: '2 Hours Scripting',
    description: 'Upload your articles and PodAI will take care of crafting your podcast script.'
  },
  {
    title: '1 Hours Recording',
    description: 'You don\'t have to record anything. We\'ll generate it based on the script.'
  },
  {
    title: '3 Hours Editing',
    description: 'You\'ll not only have the audio, but a polished audio and audiovisual contents.'
  },
  {
    title: '1 Hours Publishing',
    description: 'PodAI hosts and serves your shows to Spotify, YouTube, and any other platform you want.'
  }
]
</script>

<style>
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}
</style>