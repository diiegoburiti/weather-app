import React from "react";
import styled from "styled-components";
import SearchBox from "../Search/SearchBox";

const MainComponent = styled.main`
  background: url("../assets/undraw_weather_app.svg") center center no-repeat;
  height: 100vh;
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <MainComponent>
      <SearchBox />
    </MainComponent>
  );
};

export default Main;
