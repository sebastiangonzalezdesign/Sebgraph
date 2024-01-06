import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from './Button'
import './BackButton.scss'

const BackButton = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Button
            className="back-btn"
            onClick={goBack}
            type="button"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
        >
            Back
        </Button>
    )
}

export default BackButton
