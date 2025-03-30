import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Spinner from './Spinner'

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    // Always check current localStorage value directly in the component logic
    const hasAccess = localStorage.getItem('projectAccess') === 'true'
    console.log('ProtectedRoute checking access (direct check):', hasAccess)

    // Check immediately, don't rely on state
    if (hasAccess) {
        return <>{children}</>
    } else {
        return <Navigate to="/projects/password-page" replace />
    }
}

export default ProtectedRoute
