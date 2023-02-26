import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about/About";
import Work from "../pages/work/Work";
import CV from "../pages/cv/CV";
import Contact from "../pages/contact/Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import SolveForTomorrow from "../pages/projects/SolveForTomorrow";
/* import DarkModeButton from "./DarkModeButton"; */
import { ThemeProvider } from "../context/ThemeContext";
import Error404 from "../pages/Error404";

const RoutesSite = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        {/* <DarkModeButton/> */}

        <Switch>
          {/* <Route exact path="/"><Work theme={theme}></Work></Route> */}
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/contact" component={Contact} />

          <Route
            exact
            path="/projects/solve-for-tomorrow"
            component={SolveForTomorrow}
          />
          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default RoutesSite;
