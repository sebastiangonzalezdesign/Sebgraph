import React from "react";
import "./PortfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      key={id}
      className={
        active
          ? "portfolioList label__100--bold active"
          : "portfolioList label__100--regular"
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
