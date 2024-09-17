import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [request, setRequest] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setRequest(`Searching for weather in ${city}...`);
    setWeatherData([]);

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    let weatherInfo = [
      { label: "Temperature", value: `${response.data.main.temp}°C` },
      { label: "Description", value: response.data.weather[0].description },
      { label: "Humidity", value: `${response.data.main.humidity}%` },
      { label: "Wind", value: `${response.data.wind.speed} m/s` },
      {
        label: "Icon",
        value: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      },
    ];

    setWeatherData(weatherInfo);
    setRequest("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={handleCityInput}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{request}</p>
      <ul className="weather-results">
        {weatherData.map(function (item, index) {
          if (item.label === "Icon") {
            return (
              <li key={index}>
                <img
                  src={item.value}
                  alt="Weather icon"
                  className="weather-icon"
                />
              </li>
            );
          }

          return (
            <li key={index}>
              <strong>{item.label}: </strong> {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
