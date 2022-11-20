import "./Contact.scss";
import contactImg from "../../img/contact-img.svg";
import profileImg from "../../img/avatar-profile.svg";
import { Button } from "../../components/Button";
import EmailCopy from "./CopyMail";
import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";

const Contact = () => {

/* Scroll animation */
  useEffect(() => {
    Aos.init({duration: 1000});

},[]);

    return(
        <main className="container-contact">

        <section data-aos="fade-up" className="hero-contact">
            <article className="hero-contact__container">
            <div className="hero-contact__text">
                <h1 data-aos="fade-up" data-aos-delay="500"  className="heading-primary">Contact me</h1>
                <span data-aos="fade-up" data-aos-delay="900"  className="heading-tertiary">Please, feel free to contact me.</span>
            </div>
            <img data-aos="flip-right" data-aos-delay="1000"  className="hero-contact__img" src={contactImg} loading="lazy" alt="sebgraph illustration"/>
        </article>
        </section>

        <section className="contact-btns">
            <article className="contact-btns__text-box">
            <img data-aos="flip-right" className="profile__img mt-40" src={profileImg} alt="avatar sebgraph"/>
            <h2 className="heading-secondary">Let’s talk</h2>
            <p className="paragraph">Please, feel free to contact me and let me be part of your great project.</p>
            </article>
            <div className="contact-btns__btns">
                <a href="mailto:sebgraph7@gmail.com" className="email">
                <Button 
                type="button" 
                buttonStyle="btn--secondary" 
                buttonSize="btn--large">
                    Email me
                </Button>
                </a>
                
{/*                 <button id="myBtn" data-clipboard-text="sebgraph7&commat;gmail&period;com"  className="tippy-box copy-button btn-contact btn-contact--primary btn-contact--animated">
                    Copy mail
                </button> */}

                <EmailCopy/>
                
            </div>



        </section>



        

    </main>
    );
};

export default Contact;