import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "/home/oem/Desktop/first_react/src/Assets/search.png"
import cloud_icon from "/home/oem/Desktop/first_react/src/Assets/cloud.png"
import wind_icon from "/home/oem/Desktop/first_react/src/Assets/wind.png"
import humidity_icon from "/home/oem/Desktop/first_react/src/Assets/humidity.png"
import drizzle_icon from "/home/oem/Desktop/first_react/src/Assets/drizzle.png"
import rain_icon from "/home/oem/Desktop/first_react/src/Assets/rain.png"
import snow_icon from "/home/oem/Desktop/first_react/src/Assets/snow.png"
import clear_icon from "/home/oem/Desktop/first_react/src/Assets/clear.png"


const WeatherApp = () => {

    let api_key = "dd94f859a0e52d6e4767fddf735f04a7"
    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "")
            return 0

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url)
        let data = await response.json()

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity + " %"
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"
        temperature[0].innerHTML = Math.floor(data.main.temp) + "&deg;C"
        location[0].innerHTML = data.name

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
            setWicon(clear_icon)
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
            setWicon(cloud_icon)
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
            setWicon(drizzle_icon)
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
            setWicon(drizzle_icon)
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
            setWicon(rain_icon)
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
            setWicon(rain_icon)
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
            setWicon(snow_icon)
        else
            setWicon(clear_icon)

    }

  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="search" />
            <div className="search-icon" onClick={()=>search()}>
                <img src={search_icon} alt="search" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="cloud" />
        </div>
        <div className="weather-temp">24&deg;C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="humidity" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="wind" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
