import "./About.scss";
import imgAbout from "../../img/img-about.svg";
import signProfile from "../../img/sign-profile.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="container-about">
      <section className="hero-about">
        <article className="hero-about__hero-container">
          <div className="hero-about__text">
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="heading__100--bold "
            >
              Sebastian González
            </h1>
            <span
              data-aos="fade-up"
              data-aos-delay="900"
              className="heading__300--bold"
            >
              Profile
            </span>
          </div>
          <img
            data-aos="flip-right"
            data-aos-delay="1000"
            className="hero-about__img"
            src={imgAbout}
            alt=""
          />
        </article>
      </section>

      <section className="profile">
        <article className="profile__container">
          <figure
            data-aos="fade-up"
            className="name-cv__img profile__img"
          ></figure>
          <div className="profile__text-box">
            <h3 data-aos="fade-up" className="heading__200--bold profile__text">
              Who i am
            </h3>
            <p
              data-aos="fade-up"
              className="paragraph__100--medium profile__paragraph"
            >
              I´m an UI designer focused on create interactive products and
              services with relevant experiences for the people. I have
              participated in different projects with talented teams and
              incredible brands like Samsung that have helped me to improve my
              personal and professional skills, I’m passionate about creating
              huge projects that connect the people with relevant experiences
              which help them to develop complex tasks in a simple way.
            </p>
            <img data-aos="fade-up" src={signProfile} alt="sebgraph" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;
