import React from "react";
import styled from "styled-components";

const WrapperLocation = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

const Location = ({ weather }) => {
  return (
    <WrapperLocation>
      {weather.name} {weather.sys.country}
    </WrapperLocation>
  );
};

export default Location;
