import React from "react";

const Input = ({ onChange, value, type, onKeyPress, placeholder }) => {
  return (
    <>
      <input
        type={type}
        className="search-bar"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Input;
