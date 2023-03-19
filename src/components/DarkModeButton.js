import "./DarkModeButton.scss";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkModeButton = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div className={`radio-buttons ${theme}`}>
      <label htmlFor="light" className="custom-radio">
        <input
          type="radio"
          name="theme"
          id="light"
          onClick={handleTheme}
          value="light"
        />
        <div id="lightContainer" className="container-icon">
          <SunIcon className="radio-btn" />
        </div>
      </label>

      <label htmlFor="dark" className="custom-radio">
        <input
          type="radio"
          name="theme"
          id="light"
          onClick={handleTheme}
          value="dark"
        />
        <div id="darkContainer" className="container-icon">
          <MoonIcon onClick={handleTheme} className="radio-btn" />
        </div>
      </label>
    </div>
  );
};

export default DarkModeButton;
