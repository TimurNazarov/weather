<script lang="ts" setup>
import { getWeatherByCityAndDate } from '@/composables/useApi'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
  
  const state = reactive({
    cityIndex: 0,
    date: new Date()
  })
  const { data, pending } = await useAsyncData('weather', () => getWeatherByCityAndDate(state.cityIndex, state.date))
  const updateCity = (cityIndex: number): void => {
    state.cityIndex = cityIndex
    refreshNuxtData('weather')
  }
  const updateDate = (date: Date): void => {
    state.date = date
    refreshNuxtData('weather')
  }
</script>

<template>
  <p v-if="pending"> Loading...</p>
  <div v-else>
    
    <CityTabs
      :activeCityIndex="state.cityIndex"
      @cityChanged="updateCity"
    />
    <div
      class="flex items-start gap-50px mt-20px"
    >
    <WeatherOutput :daysList="data" />
    <client-only>
      <Datepicker
        v-model="date"
        @update:modelValue="updateDate"
        inline
        autoApply 
      />
    </client-only>
    </div>
  </div>
</template>
