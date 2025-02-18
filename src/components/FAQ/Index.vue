<template>
    <section class="px-6 py-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-6">
                <h2 class="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p class="text-gray-600">
                    Can't find an answer? Contact our support team at support@berkaslegal.com
                </p>
            </div>

            <div class="space-y-4">
                <FaqItem v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
            </div>
        </div>
    </section>
</template>

<script setup>
import FaqItem from './FaqItem.vue'
import { faqs } from './data.js'
</script>
