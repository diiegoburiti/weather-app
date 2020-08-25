import React from "react";
import "./App.css";

const api = {
  key: process.env.REACT_APP_KEY,
  url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});
  const [error, setError] = React.useState(null);

  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  async function searchWeather(event) {
    let response;
    let json;
    console.log(error);
    if (event.key === "Enter") {
      try {
        setError(null);
        response = await fetch(
          `${api.url}weather?q=${query}&units=metric&APPID=${api.key}`,
        );
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
        setWeather(json);
        setQuery("");
        console.log(response);
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
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
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={searchWeather}
          />
          {error ? <p className="error">{error}</p> : ""}
        </div>
        {weather.main ? (
          <div className="location-box">
            <div className="location">
              {weather.name} {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
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
