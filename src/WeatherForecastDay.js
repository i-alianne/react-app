import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
