/* import ImgHome from "../../img/img-home.svg"; */
import "./HeroWork.scss";
import { lazy, useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Button } from "../../components/Button";
/* import Hero3D from "../../components/Hero3D"; */
import Cv from "../../documents/cv-sebastian-gonzalez.pdf";
import { Suspense } from "react/cjs/react.production.min";
const Hero3D = lazy(() => import("../../components/Hero3D"));

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
            id="work"
            className="display__100--bold section-hero__heading"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hi! I’m Sebastian
          </h1>
          <p className="paragraph__100--regular section-hero__paragraph">
            I will help you to connect the users with your digital products
            through great experiences and memorable interfaces.
          </p>
        </div>

        <div className="section-hero__btn-container">
          <a href="mailto:sebgraph7@gmail.com" className="email">
            <Button
              type="button"
              buttonStyle="btn--secondary"
              buttonSize="btn--large"
            >
              Contact me
            </Button>
          </a>
          <a href={Cv} rel="noreferrer" download="">
            <Button
              type="button"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              Download CV
            </Button>
          </a>
        </div>
      </article>
      <Suspense>
        <Hero3D className="section-hero__3d" />
      </Suspense>
    </section>
  );
};

export default HeroWork;
