import React, { lazy, Suspense, useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { trackPageView } from '../services/analytics'

import Error404 from '../pages/Error404'
import ScrollToTop from './ScrollToTop'
import BackToTopButton from './BackToTopButton'
import Spinner from './Spinner'
import ProtectedRoute from './ProtectedRoute'

const NavBar = lazy(() => import('./NavBar'))
const Footer = lazy(() => import('./Footer'))
const AvExpert = lazy(() => import('../pages/projects/AvExpert'))
const SolveForTomorrow = lazy(
    () => import('../pages/projects/SolveForTomorrow.js')
)
const Essilor = lazy(() => import('../pages/projects/Essilor'))
const Landing = lazy(() => import('../pages/projects/Landing'))
const AlephDS = lazy(() => import('../pages/projects/Aleph'))
const HubDS = lazy(() => import('../pages/projects/Hub'))
const Startoken = lazy(() => import('../pages/projects/Startoken'))
const MUIK = lazy(() => import('../pages/projects/MUIK'))

const About = lazy(() => import('../pages/about/About'))
const Work = lazy(() => import('../pages/work/Work'))
const CV = lazy(() => import('../pages/cv/CV'))
const PasswordPage = lazy(() => import('../pages/PasswordPage'))
const MotionUIKit = lazy(() => import('../pages/motion-ui-kit/MotionUIKit'))

const RoutesSite = () => {
    const location = useLocation()
    const [navigating, setNavigating] = useState(false)

    useEffect(() => {
        trackPageView(location.pathname + location.search)
    }, [location])

    useEffect(() => {
        const onNavStart = () => setNavigating(true)
        window.addEventListener(
            'app:navigateStart',
            onNavStart as EventListener
        )
        return () =>
            window.removeEventListener(
                'app:navigateStart',
                onNavStart as EventListener
            )
    }, [])

    // hide navigating overlay after location changes (route settled)
    useEffect(() => {
        if (navigating) {
            const t = setTimeout(() => setNavigating(false), 300)
            return () => clearTimeout(t)
        }
    }, [location])

    return (
        <>
            {navigating && (
                <div className="global-spinner-overlay">
                    <Spinner />
                </div>
            )}
            <Suspense fallback={<Spinner duration={5000} />}>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    {/* Redirect /projects to the Work page and scroll to Portfolio */}
                    <Route
                        path="/projects"
                        element={<Navigate to="/?scrollTo=portfolio" replace />}
                    />
                    <Route path="/" element={<Work />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<CV />} />

                    {/* Hidden MUIK Motion UI Kit landing page */}
                    <Route path="/motion-ui-kit" element={<MotionUIKit />} />

                    <Route
                        path="/projects/solvefortomorrow"
                        element={<SolveForTomorrow />}
                    />
                    <Route
                        path="/projects/solve"
                        element={
                            <Navigate to="/projects/solvefortomorrow" replace />
                        }
                    />
                    <Route path="/projects/avexpert" element={<AvExpert />} />
                    <Route
                        path="/projects/AV"
                        element={<Navigate to="/projects/avexpert" replace />}
                    />
                    <Route path="/projects/essilor" element={<Essilor />} />
                    <Route
                        path="/projects/Essilor"
                        element={<Navigate to="/projects/essilor" replace />}
                    />
                    <Route path="/projects/landing" element={<Landing />} />
                    <Route
                        path="/projects/Landing"
                        element={<Navigate to="/projects/landing" replace />}
                    />
                    <Route path="/projects/aleph" element={<AlephDS />} />
                    <Route
                        path="/projects/Aleph"
                        element={<Navigate to="/projects/aleph" replace />}
                    />
                    <Route path="/projects/startoken" element={<Startoken />} />
                    <Route
                        path="/projects/Startoken"
                        element={<Navigate to="/projects/startoken" replace />}
                    />
                    <Route path="/projects/MUIK" element={<MUIK />} />
                    <Route
                        path="/projects/MUIK"
                        element={<Navigate to="/projects/MUIK" replace />}
                    />

                    {/* Password-protected Hub Design System route */}
                    <Route
                        path="/projects/Hub"
                        element={
                            <ProtectedRoute>
                                <HubDS />
                            </ProtectedRoute>
                        }
                    />
                    {/* Password Page */}
                    <Route
                        path="/projects/password-page"
                        element={<PasswordPage />}
                    />

                    {/* Catch-all 404 route */}
                    <Route path="*" element={<Error404 />} />
                </Routes>

                <BackToTopButton />
                <Footer />
            </Suspense>
        </>
    )
}

export default RoutesSite
