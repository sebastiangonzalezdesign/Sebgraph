import '../../work/contact/Contact.scss'
import profileImg from '../../../img/contact.svg'
import { Button } from '../../../components/Button'
import EmailCopy from './CopyMail'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const Contact = () => {
    /* Scroll animation */
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section className="section-contact">
            <div className="contact-container">
                <div className="contact-container__heading">
                    <h2 className="heading__100--bold ">Contact</h2>
                    <p className="paragraph__100--regular contact-container__paragraph">
                        If you have a project you'd like to collaborate on or
                        would like to learn more about my services, I'd love to
                        hear from you. You can reach me by email clicking below.
                        I'll get back to you as soon as possible. Let's create
                        something great together!
                    </p>
                </div>
                <article className="contact-container__text-box">
                    <img
                        data-aos="fade-up"
                        className="profile__img"
                        src={profileImg}
                        alt="avatar sebgraph"
                    />
                </article>
                <div className="contact-container__btns">
                    <a href="mailto:sebgraph7@gmail.com" className="email">
                        <Button
                            className="contact-container__btn"
                            type="button"
                            buttonStyle="btn--secondary"
                            buttonSize="btn--large"
                        >
                            Email me
                        </Button>
                    </a>

                    {/*                 <button id="myBtn" data-clipboard-text="sebgraph7&commat;gmail&period;com"  className="tippy-box copy-button btn-contact btn-contact--primary btn-contact--animated">
                    Copy mail
                </button> */}

                    <EmailCopy />
                </div>
            </div>
        </section>
    )
}

export default Contact
