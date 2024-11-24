<template>
  <section id="features" class="py-20 bg-gray-900 bg-opacity-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-center text-white mb-12">Why Choose PodAI?</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr>
              <th class="p-6 border-b border-gray-700 text-gray-400">Feature</th>
              <th class="p-6 border-b border-gray-700 text-gray-400 text-center">PodAI</th>
              <th class="p-6 border-b border-gray-700 text-gray-400 text-center">Descript</th>
              <th class="p-6 border-b border-gray-700 text-gray-400 text-center">Riverside.fm</th>
              <th class="p-6 border-b border-gray-700 text-gray-400 text-center">Buzzsprout</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(feature, index) in features" :key="index" class="border-b border-gray-700">
              <td class="p-6 text-white font-semibold">{{ feature.name }}</td>
              <td class="p-6 text-center">
                <span v-if="feature.podAI" class="text-green-400 font-semibold">✓</span>
                <span v-else class="text-gray-500">—</span>
              </td>
              <td class="p-6 text-center">
                <span v-if="feature.descript" class="text-yellow-400 font-semibold">✓</span>
                <span v-else class="text-gray-500">—</span>
              </td>
              <td class="p-6 text-center">
                <span v-if="feature.riverside" class="text-blue-400 font-semibold">✓</span>
                <span v-else class="text-gray-500">—</span>
              </td>
              <td class="p-6 text-center">
                <span v-if="feature.buzzsprout" class="text-red-400 font-semibold">✓</span>
                <span v-else class="text-gray-500">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  features: Array
});
</script>

<style scoped>
table {
  border-spacing: 0 0.5rem;
}

thead th {
  font-size: 1.125rem;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>