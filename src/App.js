function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="d-flex" role="search" id="search-form">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter a city at"
            aria-label="Search"
            id="city-input"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="row">
          <div className="col-6">
            <h1 id="city">Paris</h1>
            <h2>
              Last Updated: <span id="date">Sunday 16:00</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              width="64"
              height="64"
              id="icon"
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
            />{" "}
            <strong class="temperature-figure" id="temperature">
              6
            </strong>
            <span id="units">
              <strong id="celsius-link">°C</strong>{" "}
            </span>
            <p id="description">Mostly sunny</p>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">30</span>%
              </li>
              <li>
                Wind: <span id="wind">5</span>Km/H
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
      <small class="my-link">
        {" "}
        <a href="https://github.com/Marvinrose">Open-source code </a>by
        Marvinrose
      </small>
    </div>
  );
}

export default App;
