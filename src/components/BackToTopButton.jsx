import React, { useState } from "react";
import "./BackToTopButton.scss";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const BackToTopButton = () => {
  const [top, setTop] = useState(false);
  const showBack = () => {
    if (window.scrollY >= 800) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  window.addEventListener("scroll", showBack);

  const backTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button onClick={backTop} className={top ? "back-button" : "no-show"}>
      <ArrowUpIcon className="back-button__icon" />
    </button>
  );
};

export default BackToTopButton;
