import RoutesSite from "./components/RoutesSite";
import "./index.scss";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <RoutesSite />
      </div>
    </ThemeProvider>

  );
}

export default App;
