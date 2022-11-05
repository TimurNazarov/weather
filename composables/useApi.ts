import getCities from '@/staticData/getCities'
import type WeatherDay from '@/types/WeatherDay'

export const getWeatherByCityAndDate = async (cityIndex: number, date: Date): Promise<Array<WeatherDay>> => {
  try {
    const DAYS = 6 // days count except today(7 with today)
  
    // formatting dates(could use a third-party for convenience)
    const dateClone = new Date(date) // avoid mutation
    const endDate = dateClone.toISOString().split('T')[0]
    const startDate = new Date(dateClone.setDate(dateClone.getDate() - DAYS)).toISOString().split('T')[0] // {DAYS} days ago
    // ---
    const config = useRuntimeConfig()
    const data: any = await $fetch(`${config.weatherApiUrl}/v1/forecast`, {
      params: {
        latitude: getCities[cityIndex].lat,
        longitude: getCities[cityIndex].lon,
        timezone: 'GMT',
        daily: 'apparent_temperature_max,apparent_temperature_min,windspeed_10m_max,weathercode',
        hourly: 'relativehumidity_2m',
        start_date: startDate, 
        end_date: endDate
      }
    })
    // parse data
    const parsedData: Array<WeatherDay> = data.daily.time.map((date: string, index: number): WeatherDay => {
      return {
        date: date,
        weathercode: data.daily.weathercode[index],
        temperature: `${data.daily.apparent_temperature_min[index]} to ${data.daily.apparent_temperature_max[index]} ${data.daily_units.apparent_temperature_max}`,
        wind: `${data.daily.windspeed_10m_max[index]} ${data.daily_units.windspeed_10m_max}`,
        humidity: `${data.hourly.relativehumidity_2m[index * 24]}${data.hourly_units.relativehumidity_2m}`
      }
    })
    return parsedData
  } catch (err) {
    console.log(err.response)
    alert(err.data.reason)
  }
}