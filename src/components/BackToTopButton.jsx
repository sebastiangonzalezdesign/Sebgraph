import React, { useState, useContext, useEffect } from 'react'
import './BackToTopButton.scss'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import ThemeContext from '../context/ThemeContext'

const BackToTopButton = () => {
    const { theme } = useContext(ThemeContext)
    const [top, setTop] = useState(false)

    // Add scroll event listener on mount, remove on unmount
    useEffect(() => {
        const showBack = () => {
            if (window.scrollY >= 800) {
                setTop(true)
            } else {
                setTop(false)
            }
        }

        window.addEventListener('scroll', showBack)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', showBack)
        }
    }, []) // Empty dependency array ensures this runs only on mount/unmount

    const backTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <button
            onClick={backTop}
            className={`${top ? 'backtop-button' : 'no-show'} ${theme}`}
        >
            <ArrowUpIcon className="backtop-button__icon" />
        </button>
    )
}

export default BackToTopButton
