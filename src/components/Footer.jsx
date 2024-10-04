import './Footer.scss'
import LinkedInIcon from '../img/linkedin-icon.svg?react'
import InstagramIcon from '../img/instagram-icon.svg?react'
import MailIcon from '../img/mail-icon.svg?react'
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
                            <LinkedInIcon className="footer__svg" />
                        </a>
                        <a
                            className="footer__social-item"
                            href="https://www.behance.net/seb-graph"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Behance profile"
                        >
                            <MailIcon className="footer__svg" />
                        </a>
                        <a
                            className="footer__social-item"
                            href="https://www.instagram.com/sebgraph/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Instagram profile"
                        >
                            <InstagramIcon className="footer__svg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
