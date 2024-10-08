// src/pages/PasswordPage.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase' // Import your Firebase configuration
import { doc, getDoc } from 'firebase/firestore'
import './PasswordPage.scss'

export default function PasswordPage() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [correctPassword, setCorrectPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPassword = async () => {
            const passwordDocRef = doc(
                db,
                'dynamicPasswords',
                'currentPassword'
            )
            const passwordDoc = await getDoc(passwordDocRef)

            if (passwordDoc.exists()) {
                setCorrectPassword(passwordDoc.data().password)
            } else {
                console.error('No such document!')
            }
        }

        fetchPassword()
    }, [])

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        if (password === correctPassword) {
            localStorage.setItem('projectAccess', 'true') // Save access to localStorage
            navigate('/projects/Hub') // Redirect to the Hub project page if password is correct
        } else {
            setError('Incorrect password. Please try again.')
        }
    }

    return (
        <div className="password-page">
            <h2>Enter Password to Access Hub Design System</h2>
            <form onSubmit={handlePasswordSubmit}>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}
