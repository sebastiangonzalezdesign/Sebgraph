import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehanceSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__text-container">
        <h2 className="footer__heading heading__100--bold">
          Let’s work together
        </h2>
        <p className="footer__text heading__200--medium">
          Also you can check my work here
        </p>
      </div>
      <div className="footer__social-container">
        <div className="footer__social-icons">
          <a
            className="footer__social-item"
            href="https://www.linkedin.com/in/sebgraph"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a
            className="footer__social-item"
            href="https://www.behance.net/seb-graph"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBehanceSquare}></FontAwesomeIcon>
          </a>
          <a
            className="footer__social-item"
            href="https://www.instagram.com/sebgraph/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
          </a>
        </div>
        <p className="paragraph__400--medium">
          All content and images Copyright © 2023 Sebastian González
        </p>
      </div>
    </footer>
  );
};

export default Footer;
