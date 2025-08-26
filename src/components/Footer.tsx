import './Footer.scss'
import LinkedInIcon from '../img/linkedin-icon.svg?react'
import InstagramIcon from '../img/instagram-icon.svg?react'
import GithubIcon from '../img/github-mark-white.svg?react'
import MailIcon from '../img/mail-icon.svg?react'
import Logo from '../img/logo-footer.svg'
import { trackEvent } from '../services/analytics'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <img
                    className="footer__logo"
                    alt="Sebastian Gonzalez Logo"
                    src={Logo}
                ></img>
                <h2 className="footer__heading display__200--bold">
                    Let’s work together
                </h2>

                <div className="footer__text-container">
                    <p className="paragraph__300--medium">
                        Made with React • Designed & Built by Sebastian González
                    </p>
                    <div className="footer__social-icons">
                        <a
                            className="footer__social-item"
                            href="https://www.linkedin.com/in/sebastiangonzalezdesign/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Linkedin profile"
                            onClick={() =>
                                trackEvent({
                                    action: 'Click Social Link',
                                    category: 'Footer',
                                    label: 'LinkedIn',
                                })
                            }
                        >
                            <LinkedInIcon className="footer__svg" />
                        </a>

                        <a
                            className="footer__social-item"
                            href="https://github.com/sebastiangonzalezdesign"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Github profile"
                            onClick={() =>
                                trackEvent({
                                    action: 'Click Social Link',
                                    category: 'Footer',
                                    label: 'Github',
                                })
                            }
                        >
                            <GithubIcon className="footer__svg" />
                        </a>

                        <a
                            className="footer__social-item"
                            href="https://www.instagram.com/sebastiangonzalezdesign/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Instagram profile"
                            onClick={() =>
                                trackEvent({
                                    action: 'Click Social Link',
                                    category: 'Footer',
                                    label: 'Instagram',
                                })
                            }
                        >
                            <InstagramIcon className="footer__svg" />
                        </a>
                        <a
                            className="footer__social-item"
                            href="mailto:info@sebastiangonzalez.design"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Send Email to Sebastian"
                            onClick={() =>
                                trackEvent({
                                    action: 'Click Social Link',
                                    category: 'Footer',
                                    label: 'Email',
                                })
                            }
                        >
                            <MailIcon className="footer__svg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
