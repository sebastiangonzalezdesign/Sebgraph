import React, { useEffect, useState, useRef } from "react";
/* import Project from "../../components/projects/Project";

import AvExpert from "../../components/projects/AvExpert";
import SolveForTomorrow from "../../components/projects/SolveForTomorrow";
import EssilorAPP from "../../components/projects/Essilor";
import LandingPage from "../../components/projects/Landing"; */
import { Link } from "react-router-dom";

import "./Portfolio.scss";
import PortfolioList from "./PortfolioList";
import {
  allPortfolio,
  uiPortfolio,
  visualPortfolio,
  codePortfolio,
} from "../../data";
/* import { Solve, AV, Essilor, Landing } from "../../dataPortfolio";
import { useProject } from "../../hooks/useProject"; */
import { Button } from "../../components/Button";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  /*   const [dataPortfolio, setDataPortfolio] = useState([]);

  const [isOpenProject, openProject, closeProject] = useProject(false); */

  /* Scroll animation */
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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

  /*   const thumbnailsOnClick = (e) => {
    if (e.currentTarget.textContent.includes("Solve For Tomorrow")) {
      setDataPortfolio(Solve);
    } else if (e.currentTarget.textContent.includes("AV Expert")) {
      setDataPortfolio(AV);
    } else if (e.currentTarget.textContent.includes("Essilor")) {
      setDataPortfolio(Essilor);
    } else if (e.currentTarget.textContent.includes("Landing S21")) {
      setDataPortfolio(Landing);
    }

    openProject();
  }; */

  /* -------Function to set the link------------ */
  /*   let { url, path } = useRouteMatch();

  const setLink = (e) => {
    if (e.currentTarget.textContent.includes("Solve For Tomorrow")) {
      url.concat("solve-for-tomorrow");
    } else if (e.currentTarget.textContent.includes("AV Expert")) {
      url.push(avExpert);
    } else if (e.currentTarget.textContent.includes("Essilor")) {
      url.push(essilor);
    } else if (e.currentTarget.textContent.includes("Landing S21")) {
      url.push(landing);
    }
  }; */

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

        <article
          className="section-portfolio__container-grid"
          data-aos="fade-up"
        >
          {data.map((d) => (
            <Link
              to={`/projects/${d.projectLink}`}
              ref={refProject}
              id={d.id}
              /* onClick={thumbnailsOnClick} */
              /* onClick={() => setDataPortfolio(Solve)}  */
              key={d.id}
              className="section-portfolio__card-project"
            >
              <img className="section-portfolio__img" src={d.img} alt="Tech" />
              <div className="section-portfolio__text-card">
                <div className="head-text">
                  <h2 id={d.id} className="heading__200--bold">
                    {d.title}
                  </h2>
                  <span className="paragraph__200--medium">
                    {d.company} | {d.year}
                  </span>
                </div>
                <p className="paragraph__100--regular">{d.text}</p>
                <Button /* onClick={thumbnailsOnClick} */>View Case</Button>
              </div>
            </Link>
          ))}
        </article>
      </section>
      {/*       {dataPortfolio.map((dataPortfolio) => (
        <Project
          id={dataPortfolio.id}
          key={dataPortfolio.id}
          isOpen={isOpenProject}
          closeProject={closeProject}
        >
          <>
            {dataPortfolio.id === 1 && (
              <SolveForTomorrow key={dataPortfolio.id} />
            )}
            {dataPortfolio.id === 2 && <AvExpert key={dataPortfolio.id} />}
            {dataPortfolio.id === 3 && <EssilorAPP key={dataPortfolio.id} />}
            {dataPortfolio.id === 4 && <LandingPage />}
          </>
        </Project>
      ))} */}
    </>
  );
}
