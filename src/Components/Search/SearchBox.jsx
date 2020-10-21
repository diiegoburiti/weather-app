import React, { useEffect } from "react";
import styled from "styled-components";
import ErrorMessage from "../../utils/Error/Error";
import Input from "../Form/Input";
import LocationBox from "./Location/LocationBox";

const Box = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

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

  /*  useEffect(() => [

  ], []) */

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
    <Box>
      <Input
        type="text"
        className="search-bar"
        placeholder="Search for a city"
        onChange={handleChange}
        value={query}
        onKeyPress={searchWeather}
      />

      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}

      {weather.main ? <LocationBox weather={weather} /> : ""}
    </Box>
  );
};

export default SearchBox;
