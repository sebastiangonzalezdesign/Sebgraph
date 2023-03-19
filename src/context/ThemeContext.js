import { createContext, useState } from "react";
import React from "react";

const ThemeContext = createContext();

const initialTheme = "dark";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setLight();
      setTheme("light");
    } else {
      setDark();
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={data}> {children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
