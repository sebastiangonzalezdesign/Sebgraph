import React, { Fragment, lazy, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom' // Import useLocation

const HeroWork = lazy(() => import('./HeroWork'))
const Portfolio = lazy(() => import('./Portfolio'))
const Contact = lazy(() => import('./contact/Contact'))

const Work = () => {
    const portfolioRef = useRef(null) // Reference to the Portfolio section
    const location = useLocation() // Get the location object

    useEffect(() => {
        // Check if the query parameter is `scrollTo=portfolio`
        const searchParams = new URLSearchParams(location.search)
        if (searchParams.get('scrollTo') === 'portfolio') {
            // Scroll to the Portfolio section
            portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])

    return (
        <main className="container-home">
            <HeroWork />

            {/* Add a ref to the Portfolio section */}

            <Portfolio ref={portfolioRef} />

            <Contact />
        </main>
    )
}

export default Work
