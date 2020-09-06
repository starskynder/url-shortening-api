import React from "react";

const Header = ({ title, text, img }) => {
  return (
    <header className="header">
      <div className="header__img">
        <img src={img} alt="woman at work" />
      </div>
      <div className="header__content">
        <h1 className="heading__primary">{title}</h1>
        <p className="header__text">{text}</p>
        <a href="#" className="primary__btn header__btn">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
