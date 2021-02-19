import React from "react";
import ErrorMessage from "../../utils/Error/Error";
import Container from "../Container/Container";
import Input from "../Form/Input";
import InfoBox from "../InfoBox/InfoBox";

const api = {
  key: process.env.REACT_APP_API_WEATHER_KEY,
  url: "https://api.openweathermap.org/data/2.5/",
};

const SearchBox = ({ value }) => {
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});
  const [error, setError] = React.useState(null);

  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  async function searchWeather(event) {
    let response;
    let json;
    if (event.key === "Enter") {
      try {
        setError(null);
        response = await fetch(
          `${api.url}weather?q=${query}&units=metric&APPID=${api.key}`,
        );
        json = await response.json();
        if (!response.ok) throw new Error(json.message);
        setWeather(json);
        setQuery("");
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    }
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search for a city"
        onChange={handleChange}
        value={query}
        onKeyPress={searchWeather}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {weather.main && <InfoBox weather={weather} />}
    </Container>
  );
};

export default SearchBox;
