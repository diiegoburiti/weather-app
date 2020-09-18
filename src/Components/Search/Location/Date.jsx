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
    const now = new Date();
    date = new Intl.DateTimeFormat("en-US", { dataStyle: "full" }).format(now);
    return date;
  }

  return <DateDisplay>{dateBuilder()}</DateDisplay>;
};

export default Currentdate;
