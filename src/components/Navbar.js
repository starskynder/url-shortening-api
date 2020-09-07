import React, { useState, useEffect } from "react";

const Navbar = ({ sections, logo, login }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const items = [...sections];
  console.log(items);

  return (
    <nav className="nav">
      <div className="nav__navigation">
        <img src={logo} alt="" className="nav__logo" />

        <button className="nav__btn" onClick={() => setOpenMenu(!openMenu)}>
          <span className="nav__btn--line"></span>
          <span className="nav__btn--line"></span>
          <span className="nav__btn--line"></span>
        </button>
      </div>

      <>
        <ul className={openMenu ? "nav__list " : "nav__list nav__close"}>
          {items.map((item, index) => {
            return (
              <li className="nav__item" key={index}>
                <a
                  href={"#" + item}
                  className="nav__link"
                  onClick={() => setOpenMenu(false)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={openMenu ? "nav__login" : "nav__login nav__close"}>
          <>
            <button className="btn__login"> login</button>
            <button className="btn__signup">sign up</button>
          </>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
