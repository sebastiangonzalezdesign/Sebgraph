/* import Spline from "@splinetool/react-spline"; */
import React from "react";
import "./Hero3D.scss";
import { Suspense } from "react/cjs/react.production.min";
const Spline = React.lazy(() => import("@splinetool/react-spline"));


export default function Hero3D() {
  return (
    
<Suspense>
      <Spline
        id="scene"
        scene="https://prod.spline.design/pm1nUvLjlHNtgX4N/scene.splinecode"
      />
      </Suspense>

  );
}
