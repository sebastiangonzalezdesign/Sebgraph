/* import Spline from "@splinetool/react-spline"; */
import React, { Suspense } from "react";
import "./Hero3D.scss";
import Spinner from "./Spinner";
const Spline = React.lazy(() => import("@splinetool/react-spline"));


export default function Hero3D() {
  return (
    <Suspense fallback={<Spinner />}>
      <Spline
        id="scene"
        scene="https://prod.spline.design/pm1nUvLjlHNtgX4N/scene.splinecode"
      />
    </Suspense>
  );
}
