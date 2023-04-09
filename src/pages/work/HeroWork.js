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
      <article className="section-hero__text-container">
        <div className="section-hero__text-container__text">
          <h1
            id="work"
            className="display__100--bold section-hero__heading"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Creating digital experiences
          </h1>
          <p className="paragraph__100--regular section-hero__paragraph">
            Hi, I'm <strong>Sebastian González, </strong>a UI/Visual designer
            with a strong desire to continuously improve my design system and
            coding skills to create memorable digital experiences that connect
            users to your products. With a passion for innovation and a deep
            understanding of user behavior, I craft exceptional interfaces that
            engage and inspire. Let's collaborate to create something
            unforgettable.
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
      <div className="section-hero__3d-container">
        <Suspense>
          <Hero3D className="section-hero__3d" />
        </Suspense>
      </div>
    </section>
  );
};

export default HeroWork;
