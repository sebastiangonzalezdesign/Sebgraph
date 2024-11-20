import React from 'react'
import './Hero.scss'
import { Suspense } from 'react'
import Rive from '@rive-app/react-canvas'
import HeroAnimation from '../img/hero.riv'
import Spinner from './Spinner'

interface HeroProps {
    className?: string
}

const Hero: React.FC<HeroProps> = ({ className }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <div className={`hero-container ${className || ''}`}>
                <Rive src={HeroAnimation} />
            </div>
        </Suspense>
    )
}

export default Hero
