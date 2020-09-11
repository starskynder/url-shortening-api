import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shorten from "./components/Shorten";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import "./sass/main.scss";
import logo from "./images/logo.svg";
import headerImg from "./images/illustration-working.svg";

function App() {
  return (
    <div className="main">
      <Navbar
        sections={["features", "pricing", "resources"]}
        logo={logo}
        login={true}
      />
      <Header
        title="More than just shorter links"
        text=" Build your brand’s recognition and get detailed insights on how your links are performing."
        img={headerImg}
      />
      <Shorten />
      <Statistics />
      <Boost />
    </div>
  );
}

export default App;
