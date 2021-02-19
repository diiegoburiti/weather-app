import React from "react";
import * as S from './index'

export const Footer = ({ ...props }) => {
  return (
    <S.TextFooter {...props}>
      <S.Text>Made by <a target="_blank" rel="noopener noreferrer" href="https://github.com/diiegoburiti" >Diego Buriti</a></S.Text>
    </S.TextFooter>
  );
};
