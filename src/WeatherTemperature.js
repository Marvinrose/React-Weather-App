import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="weatherTemperature">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span id="units">
          <strong id="celsius-link">
            °C | {""}{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F
            </a>{" "}
          </strong>
        </span>
      </span>
    );
  } else {
    return (
      <span className="weatherTemperature">
        <span id="temperature">{Math.round(fahrenheit())}</span>
        <span id="units">
          <strong id="celsius-link">
            <a href="/" onClick={showCelsius}>
              {" "}
              °C
            </a>{" "}
            | °F
          </strong>
        </span>
      </span>
    );
  }
}
