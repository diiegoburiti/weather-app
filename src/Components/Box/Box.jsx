import React from "react";
import styled from "styled-components";

const BoxResult = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export default function Box({ children }) {
  return <BoxResult>{children}</BoxResult>;
}
