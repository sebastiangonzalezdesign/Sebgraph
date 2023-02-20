import ImgHome from "../../img/img-home.svg";
import "./HeroWork.scss";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";

const HeroWork = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={`section-hero ${theme}`}>
      <article className="section-hero__text-container">
        <h1 className="heading-primary" data-aos="fade-up" data-aos-delay="500">
          Hi! I’m Sebastian
        </h1>
        <p className="paragraph">
          I will help you to connect the users with your digital products
          through great experiences and memorable interfaces.
        </p>
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
