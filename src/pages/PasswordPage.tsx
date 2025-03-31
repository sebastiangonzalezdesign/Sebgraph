import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { functions } from '../../firebase' // Import your firebase config
import { httpsCallable, Functions } from 'firebase/functions'
import './PasswordPage.scss'
import Hub from './projects/Hub'
import BackButton from '../components/BackButton'
import { Button } from '../components/Button'
import { LockClosedIcon } from '@heroicons/react/24/outline'

interface VerifyPasswordResponse {
    success: boolean
}

const PasswordPage = () => {
    const [inputPassword, setInputPassword] = useState('')
    const [accessGranted, setAccessGranted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isFirebaseReady, setIsFirebaseReady] = useState(!!functions)
    const navigate = useNavigate()

    // Check if Firebase is ready
    useEffect(() => {
        if (functions) {
            setIsFirebaseReady(true)
        } else {
            console.error('Firebase Functions not initialized correctly')
            setErrorMessage('Service unavailable. Please try again later.')
        }
    }, [])

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value)
        setErrorMessage('')
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputPassword) {
            setErrorMessage('Please fill out the password field.')
            return
        }

        if (!functions || !isFirebaseReady) {
            setErrorMessage('Service unavailable. Please try again later.')
            console.error(
                'Cannot verify password: Firebase Functions not available'
            )
            return
        }

        try {
            console.log('Sending password:', { password: inputPassword })

            const verifyPassword = httpsCallable(functions, 'verifyPassword')
            const result = await verifyPassword({ password: inputPassword })

            console.log('Function result:', result)
            console.log('Result data:', result.data)

            const { success } = result.data as VerifyPasswordResponse

            console.log('Authentication success:', success)

            if (success) {
                console.log('Access granted, setting localStorage')
                // 1. First set localStorage
                localStorage.setItem('projectAccess', 'true')

                // 2. Set state (but don't render Hub directly)
                setAccessGranted(true)

                // 3. Use only ONE navigation method (prefer navigate for React Router)
                console.log('Navigating to /projects/Hub')
                navigate('/projects/Hub', { replace: true })
            } else {
                console.log('Password incorrect')
                setErrorMessage('Incorrect password. Please try again.')
            }
        } catch (error) {
            console.error('Error verifying password:', error)
            setErrorMessage('An error occurred while verifying the password.')
        }
    }

    // Rest of component remains the same
    return (
        <div className="password-page">
            <BackButton />
            {/* Rest of your JSX stays the same */}
            <div className="password-page__container">
                <div className="password-page__text-box">
                    <LockClosedIcon className="password-page__icon" />
                    <h3 className="heading__100--bold">
                        This Project Requires a Password
                    </h3>
                    <p>
                        This project showcases one of my design system works. To
                        gain full access, please enter the password provided to
                        you. If you haven't received it or need assistance, feel
                        free to contact me directly.
                    </p>
                </div>
                <form className="password-page__form" onSubmit={handleSubmit}>
                    <div className="password-page__input-container">
                        <input
                            className="password-page__input"
                            type="password"
                            id="password"
                            value={inputPassword}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label
                            className="password-page__label"
                            htmlFor="password"
                        >
                            Enter Password
                        </label>
                        {errorMessage && (
                            <p className="password-page__error-message paragraph__300--bold">
                                {errorMessage}
                            </p>
                        )}
                    </div>

                    <Button
                        buttonStyle="btn--primary"
                        buttonSize="btn--lg"
                        type="submit"
                        disabled={!isFirebaseReady}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default PasswordPage
