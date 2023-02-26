import React from "react";
import "./Project.scss";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Project = ({ children, isOpen, closeProject }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`project section-portfolio__modal container-portfolio-modal ${theme} ${
        isOpen && "is-open"
      } ${!isOpen && "is-close"}`}
    >
      <div className="project-container">
        <button className="modal__close" onClick={closeProject}>
          <svg
            className="modal__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            focusable="false"
          >
            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
          </svg>
        </button>

        {/* <button className="project-close" onClick={closeProject}>X</button> */}
        {children}
      </div>
    </section>
  );
};

export default Project;
