import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="forecast-day">Thu</div>
        <div className="forecast-icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Broken clouds"
          />
        </div>
        <div className="forecast-temperatures">
          <span className="forecast-temperature-max">19º</span>{" "}
          <span className="forecast-temperature-min">10º</span>
        </div>
      </div>
    </div>
  );
}
