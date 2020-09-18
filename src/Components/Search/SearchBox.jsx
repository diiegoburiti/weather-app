import React from "react";
import styled from "styled-components";
import Input from "../Form/Input";

const Box = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const api = {
  key: process.env.REACT_APP_API_KEY,
  url: "https://api.openweathermap.org/data/2.5/",
};

const SearchBox = ({ value }) => {
  const [error, setError] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const [weather, setWeather] = React.useState({});

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
      }
    }
  }

  return (
    <Box>
      <Input
        type="text"
        className="search-bar"
        placeholder="Search a city"
        onChange={handleChange}
        value={value}
        onKeyPress={searchWeather}
      />
      {error ? <p className="error">{error}</p> : ""}
    </Box>
  );
};

export default SearchBox;
