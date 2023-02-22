import ImgHome from "../../img/img-home.svg";
import "./HeroWork.scss";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Button } from "../../components/Button";

const HeroWork = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={`section-hero ${theme}`}>
      <article className="section-hero__container">
        <div className="section-hero__container__text-container">
          <h1
            className="display__100--bold"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hi! I’m Sebastian
          </h1>
          <p className="paragraph__100--regular">
            I will help you to connect the users with your digital products
            through great experiences and memorable interfaces.
          </p>
        </div>

        <div className="section-hero__btn-container">
          <Button
            type="button"
            buttonStyle="btn--secondary"
            buttonSize="btn--large"
          >
            View work
          </Button>
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Download CV
          </Button>
        </div>
      </article>

      <img
        className="section-hero__img"
        data-aos="flip-right"
        data-aos-delay="1000"
        src={ImgHome}
        alt="sebgraph illustration"
      />
    </section>
  );
};

export default HeroWork;
