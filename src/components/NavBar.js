import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.svg";
import AboutIcon from "../img/about-icon.svg";
import ContactIcon from "../img/contact-icon.svg";
import CvIcon from "../img/cv-icon.svg";
import WorkIcon from "../img/work-icon.svg";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import DarkModeButton from "./DarkModeButton";
import React from "react";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

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

  return (
    <header className={color ? `header header-bg ${theme}` : `header ${theme}`}>
      <nav className="navbar">
        <a href="/" className="header__logo-box">
          <img className="header__icon" src={Logo} alt="logo"></img>
          <span className="header__text">SEBGRAPH</span>
        </a>

        <div className="header__menu">
          <nav className="header__navigation">
            <ul className="header__list">
              <li className="header__item">
                <NavLink
                  className="header__link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  <img
                    className="header__icon-responsive"
                    src={WorkIcon}
                    alt="Work icon"
                  />
                  Work
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className="header__link"
                  exact
                  to="/about"
                  activeClassName="active"
                >
                  <img
                    className="header__icon-responsive"
                    src={AboutIcon}
                    alt="About icon"
                  />
                  About
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className="header__link"
                  exact
                  to="/cv"
                  activeClassName="active"
                >
                  <img
                    className="header__icon-responsive"
                    src={CvIcon}
                    alt="CV icon"
                  />
                  CV
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  className="header__link"
                  exact
                  to="/contact"
                  activeClassName="active"
                >
                  <img
                    className="header__icon-responsive"
                    src={ContactIcon}
                    alt="Contact icon"
                  />
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <DarkModeButton></DarkModeButton>
      </nav>
    </header>
  );
};

export default NavBar;
