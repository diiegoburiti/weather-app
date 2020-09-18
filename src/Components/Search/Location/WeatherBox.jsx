import React from "react";
import styled from "styled-components";

const Temp = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 25px 35px;
  color: #fff;
  font-size: 100px;
  font-weight: 900;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  text-align: center;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`;

const Wheather = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

const WeatherWrapper = styled.div`
  text-align: center;
`;

const WeatherBox = ({ weather }) => {
  return (
    <WeatherWrapper>
      <Temp>{Math.round(weather.main.temp)}°C</Temp>
      <Wheather>{weather.weather[0].main}</Wheather>
    </WeatherWrapper>
  );
};

export default WeatherBox;
