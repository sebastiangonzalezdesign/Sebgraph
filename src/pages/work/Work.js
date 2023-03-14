import HeroWork from "../work/HeroWork";
import Portfolio from "../../pages/work/Portfolio";
import React from "react";
import Contact from "../../pages/work/contact/Contact";

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
