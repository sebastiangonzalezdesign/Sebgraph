import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../context/ThemeContext'
import './BackButton'

const BackButton = () => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <Button
            className={`back-btn ${theme}`}
            onClick={goBack}
            type="button"
            buttonStyle="btn--secondary"
            buttonSize="btn--md"
            iconLeft={<ArrowLeftIcon />}
            fixedPosition={true}
        >
            Back
        </Button>
    )
}

export default BackButton
