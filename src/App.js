import React from "react";
import Navbar from "./components/Navbar";
import "./sass/main.scss";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <Navbar
        sections={["features", "pricing", "resources"]}
        logo={logo}
        login={true}
      />
    </div>
  );
}

export default App;
