import React from "react";
import styled from "styled-components";
import SearchBox from "../Search/SearchBox";
import bgImg from "../../assets/undraw_weather_app.svg";
import bgTablet from "../../assets/undraw_weather_app.tablet.svg";
import bgMobile from "../../assets/undraw_weather_app.mobile.svg";

const MainComponent = styled.main`
  background: url(${bgImg}) center center no-repeat;
  height: 100vh;
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;
  position: relative;

  @media (max-width: 800px) {
    background: url(${bgTablet}) center center no-repeat;
  }

  @media (max-width: 414px) {
    background: url(${bgMobile}) center center no-repeat;
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
