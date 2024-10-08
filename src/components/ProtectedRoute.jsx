// src/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase' // Your Firebase configuration
import { doc, getDoc } from 'firebase/firestore'

const ProtectedRoute = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAccess = async () => {
            const passwordDocRef = doc(
                db,
                'dynamicPasswords',
                'currentPassword'
            )
            const passwordDoc = await getDoc(passwordDocRef)

            if (passwordDoc.exists()) {
                const storedPassword = passwordDoc.data().password
                const accessGranted =
                    localStorage.getItem('projectAccess') === 'true'

                if (accessGranted) {
                    setHasAccess(true)
                } else {
                    // Optional: Redirect to password page if no access
                    setHasAccess(false)
                }
            } else {
                console.error('No such document!')
            }

            setLoading(false)
        }

        checkAccess()
    }, [])

    if (loading) {
        return <div>Loading...</div> // Optional: Show a loading spinner while checking access
    }

    return hasAccess ? children : <Navigate to="/projects/password-page" />
}

export default ProtectedRoute
