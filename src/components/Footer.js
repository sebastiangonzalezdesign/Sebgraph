import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehanceSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <footer className={`footer ${theme}`}>
        <h2 className="footer__heading heading-secondary">Let’s work together</h2>
        <p className="footer__text heading-tertiary">Also you can check my work here</p>
        <div className="footer__social-container">
            <a className="footer__social-item" href="https://www.linkedin.com/in/sebgraph" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className="footer__social-item" href="https://www.behance.net/seb-graph" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faBehanceSquare}></FontAwesomeIcon>
            </a>    
            <a className="footer__social-item" href="https://www.instagram.com/sebgraph/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
            </a>        
        </div>
        <p className="footer__small">All content and images Copyright © 2021 Sebastian González</p>
        </footer>
    
    )

};

export default Footer;