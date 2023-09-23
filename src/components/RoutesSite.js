import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { lazy } from "react";

import Error404 from "../pages/Error404";
import ScrollToTop from "./ScrollToTop";
import BackToTopButton from "./BackToTopButton";
import { Suspense } from "react/cjs/react.production.min";
import Spinner from "./Spinner";

const NavBar = lazy(() => import("./NavBar"));
const Footer = lazy(() => import("./Footer"));
const AvExpert = lazy(() => import("../pages/projects/AvExpert"));
const SolveForTomorrow = lazy(() =>
  import("../pages/projects/SolveForTomorrow")
);
const Essilor = lazy(() => import("../pages/projects/Essilor"));
const Landing = lazy(() => import("../pages/projects/Landing"));

const About = lazy(() => import("../pages/about/About"));
const Work = lazy(() => import("../pages/work/Work"));
const CV = lazy(() => import("../pages/cv/CV"));

const RoutesSite = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cv" component={CV} />

          <Route exact path="/projects/solve" component={SolveForTomorrow} />
          <Route exact path="/projects/AV" component={AvExpert} />
          <Route exact path="/projects/Essilor" component={Essilor} />
          <Route exact path="/projects/Landing" component={Landing} />

          <Route path="*" component={Error404} />
        </Switch>
        <BackToTopButton />
        <Footer />
      </Router>
    </Suspense>
  );
};

export default RoutesSite;
