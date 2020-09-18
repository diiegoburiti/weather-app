import React from "react";
import styled, { keyframes } from "styled-components";

import Date from "./Date";
import Location from "./Location";
import WeatherBox from "./WeatherBox";

const showDown = keyframes`
 from {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const LocationWrapper = styled.section`
  transition: 0.3s;
  margin-top: 6rem;
  animation: ${showDown} 0.3s forwards;
`;

const LocationBox = ({ weather }) => {
  return (
    <LocationWrapper>
      <Location weather={weather} />
      <Date />
      <WeatherBox weather={weather} />
    </LocationWrapper>
  );
};

export default LocationBox;
