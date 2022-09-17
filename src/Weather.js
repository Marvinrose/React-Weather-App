import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./index.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e0c0e5fb63b9e9c04b11fea23c52a601";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form
            className="d-flex"
            onSubmit={handleSubmit}
            role="search"
            id="search-form"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter a city"
              aria-label="Search"
              id="city-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button className="btn search-button" type="submit">
              Search
            </button>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <small class="my-link">
          {" "}
          <a href="https://github.com/Marvinrose">Open-source code </a>by
          Marvinrose
        </small>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
