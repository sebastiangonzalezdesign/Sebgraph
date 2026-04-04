import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Spinner from './Spinner'

interface ProtectedRouteProps {
    children: React.ReactNode
}

/**
 * Validate JWT token without external libraries (minimal check)
 * This is a basic client-side validation. Server should also validate on API calls.
 */
function isTokenValid(token: string): boolean {
    if (!token) return false

    try {
        // Parse the JWT (format: header.payload.signature)
        const parts = token.split('.')
        if (parts.length !== 3) return false

        // Decode payload (middle part)
        const payload = JSON.parse(atob(parts[1]))

        // Check expiration
        if (payload.exp) {
            const currentTime = Math.floor(Date.now() / 1000)
            if (payload.exp < currentTime) {
                // Token expired
                return false
            }
        }

        // Token is valid
        return true
    } catch (error) {
        // Invalid token format
        return false
    }
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('projectAccessToken')
    const hasValidToken = isTokenValid(token || '')

    if (import.meta.env.DEV) {
        console.log('ProtectedRoute checking token:', {
            hasToken: !!token,
            isValid: hasValidToken,
        })
    }

    if (hasValidToken) {
        return <>{children}</>
    } else {
        // Clear invalid token if present
        if (token) {
            localStorage.removeItem('projectAccessToken')
        }
        return <Navigate to="/projects/password-page" replace />
    }
}

export default ProtectedRoute
