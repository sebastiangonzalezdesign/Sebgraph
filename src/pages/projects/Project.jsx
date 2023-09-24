import React from "react";
import "./ProjectStyles.scss";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Project = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`project section-portfolio__modal container-portfolio-modal ${theme}`}
    >
      <div className="project-container">{children}</div>
    </section>
  );
};

export default Project;
