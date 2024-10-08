import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Ensure Routes is imported correctly

import Error404 from '../pages/Error404'
import ScrollToTop from './ScrollToTop'
import BackToTopButton from './BackToTopButton'
import Spinner from './Spinner'
import ProtectedRoute from './ProtectedRoute'

const NavBar = lazy(() => import('./NavBar'))
const Footer = lazy(() => import('./Footer'))
const AvExpert = lazy(() => import('../pages/projects/AvExpert'))
const SolveForTomorrow = lazy(() =>
    import('../pages/projects/SolveForTomorrow.jsx')
)
const Essilor = lazy(() => import('../pages/projects/Essilor'))
const Landing = lazy(() => import('../pages/projects/Landing'))
const AlephDS = lazy(() => import('../pages/projects/Aleph'))
const HubDS = lazy(() => import('../pages/projects/Hub'))

const About = lazy(() => import('../pages/about/About'))
const Work = lazy(() => import('../pages/work/Work'))
const CV = lazy(() => import('../pages/cv/CV'))
const PasswordPage = lazy(() => import('../pages/PasswordPage'))

const RoutesSite = () => {
    return (
        <Suspense fallback={<Spinner duration={5000} />}>
            <Router>
                <ScrollToTop />

                <NavBar />

                <Routes>
                    <Route path="/" element={<Work />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<CV />} />
                    <Route
                        path="/projects/solve"
                        element={<SolveForTomorrow />}
                    />
                    <Route path="/projects/AV" element={<AvExpert />} />
                    <Route path="/projects/Essilor" element={<Essilor />} />
                    <Route path="/projects/Landing" element={<Landing />} />
                    <Route path="/projects/Aleph" element={<AlephDS />} />

                    {/* Password-protected Hub Design System route */}
                    <Route
                        path="/projects/Hub"
                        element={
                            <ProtectedRoute>
                                <HubDS />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/projects/password-page"
                        element={<PasswordPage />}
                    />
                    <Route path="*" element={<Error404 />} />
                </Routes>

                <BackToTopButton />
                <Footer />
            </Router>
        </Suspense>
    )
}

export default RoutesSite
