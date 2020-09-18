import React from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  appearance: none;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
  color: #313131;
  font-size: 20px;
  transition: 0.4s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.75);
  }
`;

const Input = ({ onChange, value, type, onKeyPress, placeholder }) => {
  return (
    <>
      <SearchBar
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Input;
