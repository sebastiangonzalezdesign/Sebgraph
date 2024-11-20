import React, { useEffect, useState } from 'react'
import { db } from '../../firebase' // Import your firebase config
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './PasswordPage.scss'
import Hub from './projects/Hub'
import BackButton from '../components/BackButton'
import { Button } from '../components/Button'
import { LockClosedIcon } from '@heroicons/react/24/outline'

const PasswordPage = () => {
    const [inputPassword, setInputPassword] = useState('')
    const [accessGranted, setAccessGranted] = useState(false)
    const [correctPassword, setCorrectPassword] = useState(null) // State to store the correct password
    const [errorMessage, setErrorMessage] = useState('') // State for error message
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPassword = async () => {
            const docRef = doc(db, 'settings', 'access') // Reference to the password document
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setCorrectPassword(docSnap.data().password) // Set the correct password from Firestore
            } else {
                console.error('No such document!')
            }
        }

        fetchPassword()
    }, [])

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value)
        setErrorMessage('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Check if the input field is empty
        if (!inputPassword) {
            setErrorMessage('Please fill out the password field.') // Set custom message for empty input
            return
        }

        // Validate password
        if (inputPassword === correctPassword) {
            setAccessGranted(true)
            localStorage.setItem('projectAccess', 'true')
            navigate('/projects/Hub', { replace: true })
        } else {
            setErrorMessage('Incorrect password. Please try again.') // Set error message for incorrect password
        }
    }

    return (
        <div className="password-page">
            <BackButton />
            {accessGranted ? (
                <div>
                    <h2>Your Project Info</h2>
                    <Hub />
                </div>
            ) : (
                <div className="password-page__container">
                    <div className="password-page__text-box">
                        <LockClosedIcon className="password-page__icon" />
                        <h3 className="heading__100--bold">
                            This Project Requires a Password
                        </h3>
                        <p>
                            This project showcases one of my design system
                            works. To gain full access, please enter the
                            password provided to you. If you haven't received it
                            or need assistance, feel free to contact me
                            directly.
                        </p>
                    </div>
                    <form
                        className="password-page__form"
                        onSubmit={handleSubmit}
                    >
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
                            {/* Conditionally render the error message */}
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
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PasswordPage
