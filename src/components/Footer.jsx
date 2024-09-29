import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faBehanceSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Logo from '../img/logo-footer.svg'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <img className="footer__logo" src={Logo}></img>
                <h2 className="footer__heading display__200--bold">
                    Let’s work together
                </h2>

                <div className="footer__text-container">
                    <p className="paragraph__300--medium">
                        Made with [React] by me | © 2024
                    </p>
                    <div className="footer__social-icons">
                        <a
                            className="footer__social-item"
                            href="https://www.linkedin.com/in/sebgraph"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Linkedin profile"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                            ></FontAwesomeIcon>
                        </a>
                        <a
                            className="footer__social-item"
                            href="https://www.behance.net/seb-graph"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Behance profile"
                        >
                            <FontAwesomeIcon
                                icon={faBehanceSquare}
                            ></FontAwesomeIcon>
                        </a>
                        <a
                            className="footer__social-item"
                            href="https://www.instagram.com/sebgraph/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Instagram profile"
                        >
                            <FontAwesomeIcon
                                icon={faInstagramSquare}
                            ></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
