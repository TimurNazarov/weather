// based on https://open-meteo.com/en/docs
export function getWeatherIcon (code) {
  if(code === 0) {
    return '/images/weather-icons/clearsky.png'
  } else if(code >= 1 && code <= 3) {
    return '/images/weather-icons/cloudy.png'
  } else if(code === 45 && code === 48) {
    return '/images/weather-icons/mist.png'
  } else if(code >= 61 && code <= 67) {
    return '/images/weather-icons/rain.png'
  } else if(code >= 71 && code <= 77 || code === 85 || code === 86) {
    return '/images/weather-icons/snow.png'
  } else if(code >= 80 && code <= 82) {
    return '/images/weather-icons/showerrain.png'
  } else if(code >= 95) {
    return '/images/weather-icons/thunderstorm.png'
  } else {
    return '/images/weather-icons/cloudy.png'
  }
}
