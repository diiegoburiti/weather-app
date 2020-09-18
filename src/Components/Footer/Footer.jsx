import React from "react";
import styled from "styled-components";

const TextFooter = styled.footer`
  font-size: 1.1rem;
  background: transparent;
  padding: 1rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const Footer = ({ textFooter }) => {
  return <TextFooter>{textFooter}</TextFooter>;
};

export default Footer;
