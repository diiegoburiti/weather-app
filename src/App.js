import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Footer textFooter={"Made by Diego Buriti."} />
    </div>
  );
}

export default App;
