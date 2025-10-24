import React, { Fragment, lazy, useEffect, useRef, useCallback } from 'react'
import { trackEvent } from '../../services/analytics'
import SEO from '../../components/SEO'
import { seoConfig } from '../../seoConfig'
import { useLocation } from 'react-router-dom' // Import useLocation

const HeroWork = lazy(() => import('./HeroWork'))
const Portfolio = lazy(() => import('./Portfolio'))
const Contact = lazy(() => import('./contact/Contact'))

const Work = () => {
    const portfolioRef = useRef<HTMLDivElement>(null) // Reference to the Portfolio section
    const location = useLocation() // Get the location object

    // Lazy-load homepage-specific styles after hydration to reduce critical CSS
    useEffect(() => {
        // load the home page styling and the rest of the global (non-critical) styles
        // after hydration. This keeps the inlined critical CSS small for react-snap.
        import('./home.page.scss')
        import('../../index-noncritical.scss')
    }, [])

    // Scroll-to-end tracking
    useEffect(() => {
        let hasTracked = false
        const handleScroll = () => {
            if (hasTracked) return
            const scrollPosition = window.innerHeight + window.scrollY
            const threshold = 100 // px from bottom
            if (scrollPosition >= document.body.offsetHeight - threshold) {
                trackEvent({
                    action: 'Reached End of Home',
                    category: 'Scroll',
                    label: 'HomePage',
                })
                hasTracked = true
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Check if the query parameter is `scrollTo=portfolio`
        const searchParams = new URLSearchParams(location.search)
        if (searchParams.get('scrollTo') === 'portfolio') {
            // Scroll to the Portfolio section
            portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])

    return (
        <>
            <SEO
                title={seoConfig.home.title}
                description={seoConfig.home.description}
                url={seoConfig.home.url}
                robots={seoConfig.home.robots}
                structuredData={seoConfig.home.structuredData}
            />
            <main className="container-home">
                <HeroWork />
                {/* Add a ref to the Portfolio section */}
                <Portfolio ref={portfolioRef} />
                <Contact />
            </main>
        </>
    )
}

export default Work
