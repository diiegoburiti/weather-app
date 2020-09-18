import React from "react";
import styled from "styled-components";
import SearchBox from "../Search/SearchBox";
import bgImg from "../../assets/undraw_weather_app.svg";

const MainComponent = styled.main`
  background: url(${bgImg}) center center no-repeat;
  height: 100vh;
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;

  @media (max-width: 800px) {
    background: none;
  }

  @media (max-width: 414px) {
    background: none;
    padding: 1rem;
    max-width: 90vw;
    margin: 0 auto;
  }
`;

const Main = () => {
  return (
    <MainComponent>
      <SearchBox />
    </MainComponent>
  );
};

export default Main;
