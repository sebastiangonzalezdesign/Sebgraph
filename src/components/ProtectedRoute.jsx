import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check if access is stored in localStorage
        const accessGranted = localStorage.getItem('projectAccess') === 'true'

        if (accessGranted) {
            // If access is already granted, no need to check Firestore, just allow access
            setHasAccess(true)
            setLoading(false)
        } else {
            // No access granted, redirect to password page
            setHasAccess(false)
            setLoading(false)
        }
    }, [])

    if (loading) {
        return <div>Loading...</div> // Show a loading spinner while checking access
    }

    return hasAccess ? children : <Navigate to="/projects/password-page" />
}

export default ProtectedRoute
