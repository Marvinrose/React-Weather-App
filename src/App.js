import React from "react";
import Weather from "./Weather";

export default function App(props) {
  return (
    <div className="App container">
      <Weather defaultCity="New York" />
    </div>
  );
}
