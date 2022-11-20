import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.svg";
import AboutIcon from "../img/about-icon.svg";
import ContactIcon from "../img/contact-icon.svg";
import CvIcon from "../img/cv-icon.svg";
import WorkIcon from "../img/work-icon.svg";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NavBar = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <header className={`header ${theme}`}>
        <a href="/" className="header__logo-box">
        <img className="header__icon" src={Logo} alt="logo"></img>
        <span className="header__text">SEBGRAPH</span>
        </a>

        <div className="header__menu">
        <nav className="header__navigation">
            <ul className="header__list">
            <li className="header__item">
                <NavLink className="header__link" exact to="/"  activeClassName="active">
                    <img className="header__icon-responsive" src={WorkIcon} alt="Work icon"/>
                    Work
                </NavLink>
            </li>
            <li className="header__item">
                <NavLink className="header__link" exact to="/about" activeClassName="active">
                    <img className="header__icon-responsive" src={AboutIcon} alt="About icon"/>
                    About
                </NavLink>
            </li>
            <li className="header__item">
                <NavLink className="header__link" exact to="/cv" activeClassName="active">
                    <img className="header__icon-responsive" src={CvIcon} alt="CV icon"/>
                    CV
                </NavLink>
            </li>
            <li className="header__item">
                <NavLink className="header__link" exact to="/contact" activeClassName="active">
                    <img className="header__icon-responsive" src={ContactIcon} alt="Contact icon"/>
                    Contact
                </NavLink>
            </li>
            </ul>
        </nav>
        </div>

        </header>
    )
}

export default NavBar;