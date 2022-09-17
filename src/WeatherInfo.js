import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function weatherInfo(props) {
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
            <WeatherIcon code={props.data.icon} size={55} />
          </span>
          <strong class="temperature-figure" id="temperature">
            {Math.round(props.data.temperature)}
          </strong>
          <span id="units">
            <strong id="celsius-link">°C</strong>{" "}
          </span>
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
        <h5>Next 5 days</h5>
        <div className="row border-section" id="forecast">
          <div className="col">
            <p className="date">Mon - Thur </p>
            <img
              width="42"
              height=""
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />
            <p> 12° 18° </p>
          </div>
          <div className="col">
            <p className="date">Mon - Thur </p>
            <img
              width="42"
              height=""
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />
            <p> 12° 18° </p>
          </div>
          <div className="col">
            <p className="date">Mon - Thur </p>
            <img
              width="42"
              height=""
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />
            <p> 12° 18° </p>
          </div>
          <div className="col">
            <p className="date">Mon - Thur </p>
            <img
              width="42"
              height=""
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />
            <p> 12° 18° </p>
          </div>
          <div className="col">
            <p className="date">Mon - Thur </p>
            <img
              width="42"
              height=""
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />
            <p> 12° 18° </p>
          </div>
        </div>
      </div>
    </div>
  );
}
