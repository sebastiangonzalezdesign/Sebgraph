import React, { useEffect, useState } from 'react'
import { db } from '../../firebase' // Import your firebase config
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './PasswordPage.scss'
import Hub from './projects/Hub'
import BackButton from '../components/BackButton'

const PasswordPage = () => {
    const [inputPassword, setInputPassword] = useState('')
    const [accessGranted, setAccessGranted] = useState(false)
    const [correctPassword, setCorrectPassword] = useState(null) // State to store the correct password
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

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputPassword === correctPassword) {
            setAccessGranted(true)
            localStorage.setItem('projectAccess', 'true')
            navigate('/projects/Hub')
        } else {
            alert('Incorrect password. Please try again.')
        }
    }

    return (
        <div className="password-page">
            <BackButton />
            {accessGranted ? (
                <div>
                    <h2>Your Project Info</h2>
                    <Hub />
                    {/* Render your project info here */}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={inputPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default PasswordPage
