import React, { useState, useEffect } from "react";

const Navbar = ({ sections, logo, login }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menu, setMenu] = useState(true);
  const items = [...sections];
  console.log(items);

  /*   useEffect(() => {
    const verify = window.matchMedia("(min-width: 400px)");

    window.addEventListener("resize", (e) => {
      if (e.matches) {
        setMenu(false);
        setOpenMenu(true);
      } else {
        setOpenMenu(false);
        setMenu(true);
      }
    });
  }); */
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width > 1200) {
      setMenu(false);
      setOpenMenu(true);
    } else {
      setMenu(true);
    }
  }, [width]);

  console.log(menu);
  return (
    <nav className="nav">
      <div className="nav__navigation">
        <img src={logo} alt="" className="nav__logo" />
        {menu ? (
          <button className="nav__btn" onClick={() => setOpenMenu(!openMenu)}>
            <span className="nav__btn--line"></span>
            <span className="nav__btn--line"></span>
            <span className="nav__btn--line"></span>
          </button>
        ) : null}
      </div>
      {openMenu ? (
        <>
          <ul className="nav__list">
            {items.map((item, index) => {
              return (
                <li className="nav__item" key={index}>
                  <a href={"#" + item} className="nav__link">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav__login">
            {login ? (
              <>
                <button className="btn__login"> login</button>
                <button className="btn__signup">sign up</button>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
