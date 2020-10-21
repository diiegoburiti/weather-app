import React from "react";
import styled from "styled-components";

const TextFooter = styled.footer`
  font-size: 1.1rem;
  background: transparent;
  padding: 1rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  right: 42%;

  span {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 800px) {
    right: 35%;
  }

  @media (max-width: 415px) {
    right: 25%;
  }
`;

export const Footer = ({ ...props }) => {
  return (
    <TextFooter {...props}>
      <span>Made by Diego Buriti</span>
    </TextFooter>
  );
};
