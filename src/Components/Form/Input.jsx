import React from "react";

import * as S from './style'

const Input = ({ onChange, value, type, onKeyPress, placeholder }) => {
  return (
      <S.InputSearch
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
  );
};

export default Input;
