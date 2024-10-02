import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom' // Use useHistory for v5
import { Button } from './Button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../context/ThemeContext'
import './BackButton'

const BackButton = () => {
    const { theme } = useContext(ThemeContext)
    const history = useHistory() // For v5

    const goBack = () => {
        history.goBack() // Go back to the previous page
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
