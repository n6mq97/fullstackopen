import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ( {city} ) => {
    const [weather, setWeather] = useState(null)
    const api_key = process.env.REACT_APP_API_KEY
    const icons = {
        'clear sky': 'https://openweathermap.org/img/wn/01d@2x.png',
        'few clouds': 'https://openweathermap.org/img/wn/02d@2x.png',
        'overcast clouds': 'https://openweathermap.org/img/wn/04d@2x.png',
        'scattered clouds': 'https://openweathermap.org/img/wn/03d@2x.png',
        'broken clouds': 'https://openweathermap.org/img/wn/04d@2x.png',
        'shower rain': 'https://openweathermap.org/img/wn/09d@2x.png',
        'rain': 'https://openweathermap.org/img/wn/10d@2x.png',
        'thunderstorm': 'https://openweathermap.org/img/wn/11d@2x.png',
        'snow': 'https://openweathermap.org/img/wn/13d@2x.png',
        'mist': 'https://openweathermap.org/img/wn/50d@2x.png',
    }

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`)
            .then(response => {
                const data = response.data[0]
                return {
                    lat: data.lat,
                    lon: data.lon
                }
            })
            .then(coordinates => {
                const lat = coordinates.lat
                const lon = coordinates.lon
                return axios
                        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
            })
            .then(response => {
                const weatherInfo = response.data
                const weatherObj = {
                    temperature: weatherInfo.main.temp,
                    sky: weatherInfo.weather[0].description,
                    wind: weatherInfo.wind.speed
                }
                setWeather(weatherObj)
            })
    })

    
    if (weather === null) {
        return null
    }

    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>temperature {weather.temperature} Celcius</p>
            <img src={icons[weather.sky]} alt={weather.sky} />
            <p>wind {weather.wind} m/s</p>
        </div>
    )
}

export default Weather