import React, { useState, useContext } from 'react'
import './BackToTopButton.scss'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../context/ThemeContext'

const BackToTopButton = () => {
    const { theme } = useContext(ThemeContext)
    const [top, setTop] = useState(false)
    const showBack = () => {
        if (window.scrollY >= 800) {
            setTop(true)
        } else {
            setTop(false)
        }
    }
    window.addEventListener('scroll', showBack)

    const backTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <button
            onClick={backTop}
            className={`${top ? 'back-button' : 'no-show'} ${theme === 'dark'}`}
        >
            <ArrowUpIcon className="back-button__icon" />
        </button>
    )
}

export default BackToTopButton
