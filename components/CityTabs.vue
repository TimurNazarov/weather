<script lang="ts" setup>
import getCities from '@/staticData/getCities'

defineProps({
  activeCityIndex: Number
})
</script>

<template>
  <!-- https://flowbite.com/docs/components/tabs/ copied tabs html from here -->
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li
      v-for="(city, index) in getCities"
      class="mr-2"
      @click="$emit('cityChanged', index)"
    >
        <a href="#" aria-current="page" :class="`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500 ${index === activeCityIndex ? 'bg-hex-00000033' : ''}`">{{ city.name }}</a>
    </li>
</ul>
</template>
