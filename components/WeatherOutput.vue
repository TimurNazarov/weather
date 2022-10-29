<script lang="ts" setup>
  import type WeatherDay from '@/types/WeatherDay'
  
  defineProps({
    daysList: Array<WeatherDay>
  })
</script>

<template>
  <div>
    <ul>
      <li
        v-for="day in daysList"
        class="flex mb-10px"
      >
        <div
          class="flex items-center justify-center w-100px text-bold text-28px"
        >
        {{ day.weathercode }}
        </div>
        <div
          class="flex flex-col"
        >
          <p class="text-24px">{{ day.temperature }}</p>
          <p>Wind: {{ day.wind }}</p>
          <p>Humidity: {{ day.humidity }}</p>
          <p>Date: {{ day.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
