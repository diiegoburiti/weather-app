import React from "react";
import "./App.css";

const api = {
  key: process.env.REACT_APP_KEY,
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});

  function dataBuilder() {
    let today = new Date();
    today.toDateString();
    return `${today} `;
  }

  function searchWeather(event) {
    if (event.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  }

  return (
    <div className="App">
      <main className="main">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchWeather}
          />
        </div>
        {weather.main ? (
          <div className="location-box">
            <div className="location">
              {weather.name} {weather.sys.country}
            </div>
            <div className="date">{dataBuilder()}</div>
            <div className="wheather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C </div>
              <div className="wheather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
