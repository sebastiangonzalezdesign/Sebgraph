import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Spinner from './Spinner'

const ProtectedRoute = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check if access is stored in localStorage
        const accessGranted = localStorage.getItem('projectAccess') === 'true'
        setHasAccess(accessGranted)
        setLoading(false)
    }, [])

    if (loading) {
        return <Spinner /> // Show a loading spinner while checking access
    }

    // If access is not granted, redirect to password page
    return hasAccess ? (
        children
    ) : (
        <Navigate to="/projects/password-page" replace />
    )
}

export default ProtectedRoute
