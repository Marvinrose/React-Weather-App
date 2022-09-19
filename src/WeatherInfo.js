import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 id="city">{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="icon">
            <WeatherIcon code={props.data.icon} size={38} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
          <p id="description">{props.data.description}</p>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>Km/H
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
