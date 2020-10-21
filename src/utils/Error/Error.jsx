import React from "react";
import styled from "styled-components";

const Error = styled.p`
  font-size: 3rem;
  color: #fff;
  margin-top: 4rem;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export default function ErrorMessage({ children }) {
  return <Error>{children}</Error>;
}
