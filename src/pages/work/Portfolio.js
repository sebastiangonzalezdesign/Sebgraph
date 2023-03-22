import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
import PortfolioList from "./PortfolioList";
import {
  allPortfolio,
  uiPortfolio,
  visualPortfolio,
  codePortfolio,
} from "../../data";
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

  return (
    <>
      <section id="work" className="section-portfolio">
        <h2 className="heading__100--bold section-portfolio__heading">
          Recent Work
        </h2>
        <div className="section-portfolio__projects-container">
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
                to={`/projects/${d.key}`}
                ref={refProject}
                id={d.id}
                path={d.key}
                key={d.id}
                className="section-portfolio__card-project link"
              >
                <div className="section-portfolio__img-container">
                  <img
                    className="section-portfolio__img"
                    src={d.img}
                    alt="Tech"
                    loading="lazy"
                  />
                </div>
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
                  <Button className="section-portfolio__btn">View Case</Button>
                </div>
              </Link>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
