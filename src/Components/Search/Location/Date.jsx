import React from "react";
import styled from "styled-components";

const DateDisplay = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.2);
`;

const Currentdate = () => {
  function dateBuilder(date) {
    let o = new Intl.DateTimeFormat(navigator.locales, {
      timeStyle: "medium",
      dateStyle: "short",
    });
    return o.format(Date.now());
  }

  return <DateDisplay>{dateBuilder()}</DateDisplay>;
};

export default Currentdate;
