import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about/About";
import Work from "../pages/work/Work";
import CV from "../pages/cv/CV";
import Contact from "../pages/contact/Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
import React from "react";
import SolveForTomorrow from "../pages/projects/SolveForTomorrow";
import AvExpert from "../pages/projects/AvExpert";
import Essilor from "../pages/projects/Essilor";
import Landing from "../pages/projects/Landing";

import { ThemeProvider } from "../context/ThemeContext";
import Error404 from "../pages/Error404";

const RoutesSite = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/projects/solve" component={SolveForTomorrow} />
          <Route exact path="/projects/AV" component={AvExpert} />
          <Route exact path="/projects/Essilor" component={Essilor} />
          <Route exact path="/projects/Landing" component={Landing} />

          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default RoutesSite;
