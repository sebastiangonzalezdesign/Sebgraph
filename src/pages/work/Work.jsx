/* import HeroWork from "../work/HeroWork"; */
/* import Portfolio from "../../pages/work/Portfolio"; */
/* import Contact from "../../pages/work/contact/Contact"; */
import React, { lazy } from "react";

const HeroWork = lazy(() => import("./HeroWork"));
const Portfolio = lazy(() => import("./Portfolio"));
const Contact = lazy(() => import("./contact/Contact"));

const Work = () => {
  return (
    <main className={"container-home"}>
      <HeroWork />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Work;
