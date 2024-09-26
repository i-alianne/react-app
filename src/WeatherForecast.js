import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "be427b594372a38b6f2t7o035dc1e24d";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
