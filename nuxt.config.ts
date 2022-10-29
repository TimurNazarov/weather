// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // '@nuxtjs/tailwindcss',
    'nuxt-windicss'
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  publicRuntimeConfig: {
    weatherApiKey: process.env.WEATHER_API_KEY,
    weatherApiUrl: process.env.WEATHER_API_URL,
  }
})
