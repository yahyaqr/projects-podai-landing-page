<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <BackgroundAccent />
    <div class="relative z-10">
      <Navigation :isMobileMenuOpen="isMobileMenuOpen" @toggleMobileMenu="toggleMobileMenu"
        @openWaitlistModal="openWaitlistModal" />
      <HeroSection @openWaitlistModal="openWaitlistModal" />
      <ExampleSection />
      <HowItWorksSection :steps="steps" />
      <BenefitsSection :timeBlocks="timeBlocks" />
      <TestimonialsSection :testimonials="testimonials" />
      <PricingSection :pricingPlans="pricingPlans" />
      <FeatureComparisonSection :features="features" />
      <FAQSection :faqs="faqs" />
      <WaitlistSection @openWaitlistModal="openWaitlistModal" />
      <Footer />
    </div>
    <WaitlistModal :isVisible="isWaitlistModalOpen" @close="closeWaitlistModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BackgroundAccent from './components/BackgroundAccent.vue';
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import ExampleSection from './components/ExampleSection.vue';
import HowItWorksSection from './components/HowItWorksSection.vue';
import BenefitsSection from './components/BenefitsSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import PricingSection from './components/PricingSection.vue';
import FeatureComparisonSection from './components/FeatureComparisonSection.vue';
import FAQSection from './components/FAQSection.vue';
import WaitlistSection from './components/WaitlistSection.vue';
import Footer from './components/Footer.vue';
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
    title: "Set Up Your Account",
    description: "Just create an account and tell us a bit about your podcast style and audience. We’ll handle the rest."
  },
  {
    title: "Provide Your Content",
    description: "Upload or link any articles, videos, or notes you want to include. We’ll take it from here and pull out the key ideas."
  },
  {
    title: "Sit Back & Relax",
    description: "Our AI will craft the perfect script and narration for you, complete with a voice that matches your brand’s tone."
  },
  {
    title: "Preview & Publish",
    description: "Review the finished podcast, make any last tweaks if needed, and with one click, we’ll publish it everywhere for you."
  }
];

const timeBlocks = [
  { title: '2 Hours Scripting', description: 'Upload your articles and PodAI will take care of crafting your podcast script.' },
  { title: '1 Hours Recording', description: 'You don\'t have to record anything. We\'ll generate it based on the script.' },
  { title: '3 Hours Editing', description: 'You\'ll not only have the audio, but a polished audio and audiovisual contents.' },
  { title: '1 Hours Publishing', description: 'PodAI hosts and serves your shows to Spotify, YouTube, and any other platform you want.' }
];

const testimonials = [
  { quote: "PodAI has saved us countless hours on production.", author: "John Doe", company: "Podcast Inc." },
  { quote: "A game-changer for anyone looking to start a podcast.", author: "Jane Smith", company: "Media Corp" },
  { quote: "The AI-generated content is surprisingly natural!", author: "Samuel Green", company: "Tech Daily" },
  { quote: "From script to publishing, PodAI handled everything seamlessly.", author: "Alice Johnson", company: "Content Creators" },
  { quote: "We've doubled our output without increasing our workload.", author: "Mark Evans", company: "VoiceHub" },
  { quote: "The AI voices are so lifelike; our listeners can't tell the difference.", author: "Rachel Lee", company: "Modern Podcasts" },
  { quote: "PodAI transformed our ideas into professional podcasts effortlessly.", author: "Tom Williams", company: "BrandCast" },
  { quote: "A must-have tool for anyone serious about scaling their podcast.", author: "Lisa Brown", company: "Pod Pros" },
  { quote: "PodAI's automation is a huge time-saver and quality booster.", author: "David Chen", company: "AudioWorks" },
  { quote: "An all-in-one solution that makes podcasting easier than ever.", author: "Nina Patel", company: "Creative Sound" }
];


const pricingPlans = [
  { name: "Basic", description: "For hobbyists and beginners", price: "$10/month", features: ["Up to 2 episodes", "Basic AI voices", "Standard support"], popular: false },
  { name: "Professional", description: "For regular podcasters", price: "$50/month", features: ["Up to 12 episodes", "Premium AI voices", "Priority support"], popular: true },
  { name: "Enterprise", description: "For businesses and large teams", price: "Contact us", features: ["Unlimited episodes", "Custom voices", "Dedicated support"], popular: false }
];

const features = [
  { name: "AI Content Generation", podAI: true, descript: true, riverside: false, buzzsprout: false },
  { name: "Automated Editing", podAI: true, descript: true, riverside: true, buzzsprout: false },
  { name: "Multi-track Recording", podAI: true, descript: false, riverside: true, buzzsprout: false },
  { name: "Episode Publishing Automation", podAI: true, descript: false, riverside: false, buzzsprout: true },
  { name: "Transcription Services", podAI: true, descript: true, riverside: true, buzzsprout: true },
  { name: "AI Voice Cloning", podAI: true, descript: true, riverside: false, buzzsprout: false },
];

const faqs = [
  { question: "How does PodAI work?", answer: "PodAI uses advanced AI algorithms to automate script creation, recording, and editing." },
  { question: "Is my content secure?", answer: "Yes, we prioritize security and ensure all data is protected and private." },
  { question: "What platforms does PodAI publish to?", answer: "PodAI can publish to Spotify, YouTube, and other major platforms." },
  { question: "Can I customize the AI voice?", answer: "Yes, PodAI offers customizable AI voices depending on your plan." }
];

</script>
