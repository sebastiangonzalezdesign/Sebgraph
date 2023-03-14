import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.svg";
import { useState } from "react";
import React from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkMode from "./dark-mode/DarkMode";

const NavBar = () => {
  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //mobile navigation
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="header__logo-box">
          <img className="header__icon" src={Logo} alt="logo"></img>
          <span className="header__text">SEBGRAPH</span>
        </a>

        <div className="header__menu">
          <nav className="header__navigation">
            <ul className={nav ? "header__list  active" : "header__list"}>
              <li
                className={
                  nav ? "header__item text-animation " : "header__item"
                }
                onClick={handleNav}
              >
                <NavLink
                  className="header__link"
                  exact
                  to="/"
                  activeClassName="link-active"
                >
                  Work
                </NavLink>
              </li>
              <li
                className={nav ? "header__item text-animation" : "header__item"}
                onClick={handleNav}
              >
                <NavLink
                  className="header__link"
                  exact
                  to="/about"
                  activeClassName="link-active"
                >
                  About
                </NavLink>
              </li>
              <li
                className={nav ? "header__item text-animation" : "header__item"}
                onClick={handleNav}
              >
                <NavLink
                  className="header__link"
                  exact
                  to="/cv"
                  activeClassName="link-active"
                >
                  CV
                </NavLink>
              </li>
              <li
                className={nav ? "header__item text-animation" : "header__item"}
                onClick={handleNav}
              ></li>
            </ul>
          </nav>
        </div>
        <DarkMode />

        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <Bars3BottomRightIcon className="icon" />
          ) : (
            <XMarkIcon className="icon" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
