import React from 'react'
import './Hero.scss'
import { Suspense } from 'react'
import Rive from '@rive-app/react-canvas'
import HeroAnimation from '../img/hero.riv'

export default function Hero() {
    return (
        <Suspense>
            <div className="hero-container">
                <Rive src={HeroAnimation} />
            </div>
        </Suspense>
    )
}
