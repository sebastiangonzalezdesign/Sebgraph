import React, { useEffect, useState, useRef } from "react";
import Project from "../../components/projects/Project";

import AvExpert from "../../components/projects/AvExpert";
import SolveForTomorrow from "../../components/projects/SolveForTomorrow";
import EssilorAPP from "../../components/projects/Essilor";
import LandingPage from "../../components/projects/Landing";

import "./Portfolio.scss";
import PortfolioList from "./PortfolioList";
import {
  allPortfolio,
  uiPortfolio,
  visualPortfolio,
  codePortfolio,
} from "../../data";
import { Solve, AV, Essilor, Landing } from "../../dataPortfolio";
import { useProject } from "../../hooks/useProject";

import Aos from "aos";
import "aos/dist/aos.css";



export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const [dataPortfolio, setDataPortfolio] = useState([]);

  const [isOpenProject, openProject, closeProject] = useProject(false);

  /* Scroll animation */
  useEffect(() => {
    Aos.init({duration: 1000});

},[]);





  let refProject = useRef();

  /* console.log( refThumbnail.current.children.item(0).textContent); */
  /* console.log(refThumbnail, refProject); */


  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "ui",
      title: "UI",
    },
    {
      id: "visual",
      title: "Visual",
    },
    {
      id: "code",
      title: "Code",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;

      case "ui":
        setData(uiPortfolio);
        break;

      case "visual":
        setData(visualPortfolio);
        break;

      case "code":
        setData(codePortfolio);
        break;

      default:
        setData(allPortfolio);
    }
  }, [selected]);

  // useEffect portfolio

  //Función para los eventos onClick de los thumbnails

  const thumbnailsOnClick = (e) => {
        if(e.currentTarget.textContent === "Solve For TomorrowCheil | 2020"){
            setDataPortfolio(Solve);
        }
        else if(e.currentTarget.textContent === "AV Expert AppCheil | 2020") {
            setDataPortfolio(AV);
        }
        else if(e.currentTarget.textContent === "Essilor AppCheil | 2020") {
            setDataPortfolio(Essilor);
        }
        else if(e.currentTarget.textContent === "Landing S21Cheil | 2020") {
            setDataPortfolio(Landing);
        }
/* 
    e.currentTarget.textContent === "Solve For TomorrowCheil | 2020"
      ? setDataPortfolio(Solve)
      : e.currentTarget.textContent === "AV Expert AppCheil | 2020"
      ? setDataPortfolio(AV)
      : e.currentTarget.textContent === "Essilor AppCheil | 2020"
      ? setDataPortfolio(Essilor)
      : e.currentTarget.textContent === "Landing S21Cheil | 2020"
      ? setDataPortfolio(Landing)
      : console.log("falla"); */

    openProject();
    
  };


  return (
    <>
      <section className="section-portfolio">
        <ul data-aos="fade-up">
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <article  className="section-portfolio__container-grid">
          
          {data.map((d) => (
            <figure
              data-aos="fade-up" 
              ref={refProject}
              id={d.id}
              onClick={thumbnailsOnClick}
              /* onClick={() => setDataPortfolio(Solve)}  */
              key={d.id}
              className="section-portfolio__card-project"
            >
              <img className="section-portfolio__img" src={d.img} alt="Tech" />
              <figcaption className="section-portfolio__text-card">
                <h2 id={d.id} className="heading-secondary">
                  {d.title}
                </h2>
                <p className="paragraph">
                  {d.company} | {d.year}
                </p>
                {/* <a href="/" className=" portfolio-link section-portfolio__link">View Case</a> */}
              </figcaption>
            </figure>
          ))}


          {dataPortfolio.map((dataPortfolio) => (
            <Project
              id={dataPortfolio.id}
              key={dataPortfolio.id}
              isOpen={isOpenProject}
              closeProject={closeProject}
            >
              <>
                {dataPortfolio.id === 1 && <SolveForTomorrow key={dataPortfolio.id}/>}
                {dataPortfolio.id === 2 && <AvExpert key={dataPortfolio.id}/>}
                {dataPortfolio.id === 3 && <EssilorAPP key={dataPortfolio.id}/>}
                {dataPortfolio.id === 4 && <LandingPage/>}
              </>


            </Project>
          ))}
        </article>
      </section>
    </>
  );
}
