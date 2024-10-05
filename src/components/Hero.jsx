import React from 'react'
import './Hero.scss'
import { Suspense } from 'react'
import Rive from '@rive-app/react-canvas'
import HeroAnimation from '../img/hero.riv'

//export default function Hero() {
//    return (
//        <Suspense>
//            <div className="hero-container">
//                <Rive src={HeroAnimation} />
//            </div>
//        </Suspense>
//    )
//}

export default function Hero({ isPageLoaded, isMobile }) {
    return (
        <Suspense>
            <div className="hero-container">
                {/* Conditionally disable the Rive animation when the page is fully loaded and on non-mobile devices */}
                {!isMobile && isPageLoaded ? (
                    <div>No Animation</div> // You can replace this with any static content or disable the animation logic
                ) : (
                    <Rive src={HeroAnimation} />
                )}
            </div>
        </Suspense>
    )
}
