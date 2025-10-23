import './NavBar.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkMode from './dark-mode/DarkMode'
import { trackEvent } from '../services/analytics'

const NavBar = () => {
    const location = useLocation()
    const isSimpleVariant = location.pathname === '/motion-ui-kit'
    // State to track header color
    const [color, setColor] = useState(false)
    // State for mobile navigation
    const [nav, setNav] = useState(false)

    // Function to change the color based on scroll position
    const changeColor = () => {
        if (window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    // useEffect to handle adding/removing the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', changeColor)

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', changeColor)
        }
    }, []) // Empty dependency array means it runs once when the component mounts

    // NavBar styles are loaded statically to preserve original behavior

    const handleNav = () => {
        setNav(!nav)
    }

    const handleNavClick = (section: string) => {
        handleNav()
        trackEvent({
            action: 'Navigation Click',
            category: 'Navigation',
            label: section,
        })
    }

    return (
        <header
            className={`${color ? 'header header-bg' : 'header'} ${
                isSimpleVariant ? 'header--simple' : ''
            }`}
        >
            <nav className="navbar">
                <a
                    href="/"
                    className="header__logo-box"
                    aria-label="Homepage - Sebastian Gonzalez Logo"
                >
                    <svg
                        className="header__icon"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            className="svg-bg"
                            width="48"
                            height="48"
                            rx="24"
                            fill="currentColor"
                        />
                        <path
                            className="svg-foreground"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.4648 11.3276C13.1552 11.3276 12.6483 11.4074 12.2311 11.829C11.8168 12.2476 11.7415 12.7508 11.7415 13.0533V19.674C11.7415 20.102 11.9092 20.4784 12.1212 20.7462C12.3701 21.0606 12.8262 21.3997 13.4648 21.3997H33.2587V32.4153L26.8035 27.6979C26.6537 27.5624 26.4631 27.4228 26.2232 27.3151C25.9168 27.1775 25.6089 27.127 25.3202 27.127H18.5449C17.7165 27.127 17.0449 27.7986 17.0449 28.627C17.0449 29.4554 17.7165 30.127 18.5449 30.127H25.0429L33.4427 36.2654C34.042 36.7698 34.7978 36.7298 35.3048 36.4737C35.7437 36.2519 36.2587 35.7299 36.2587 34.9468V20.1254C36.2587 19.499 35.9326 19.044 35.6179 18.7896C35.3517 18.5744 34.9719 18.3997 34.5353 18.3997H14.7415V14.3276H34.6842C35.5127 14.3276 36.1842 13.6561 36.1842 12.8276C36.1842 11.9992 35.5127 11.3276 34.6842 11.3276H13.4648ZM13.4648 22.6882C13.0282 22.6882 12.6485 22.8628 12.3822 23.0781C12.0676 23.3324 11.7415 23.7875 11.7415 24.4139V34.9468C11.7415 35.3748 11.9092 35.7511 12.1212 36.0189C12.3701 36.3333 12.8262 36.6725 13.4648 36.6725H28.3957C29.2242 36.6725 29.8957 36.0009 29.8957 35.1725C29.8957 34.3441 29.2242 33.6725 28.3957 33.6725H14.7415V25.6882H24.4898C25.3182 25.6882 25.9898 25.0166 25.9898 24.1882C25.9898 23.3597 25.3182 22.6882 24.4898 22.6882H13.4648Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>

                {/* Only show navigation menu if not simple variant */}
                {!isSimpleVariant && (
                    <div className="header__menu">
                        <nav className="header__navigation">
                            <ul
                                className={
                                    nav ? 'header__list active' : 'header__list'
                                }
                            >
                                <li
                                    className={
                                        nav
                                            ? 'header__item text-animation'
                                            : 'header__item'
                                    }
                                    onClick={() => handleNavClick('Work')}
                                >
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'header__link link-active'
                                                : 'header__link'
                                        }
                                        to="/"
                                    >
                                        Work
                                    </NavLink>
                                </li>
                                <li
                                    className={
                                        nav
                                            ? 'header__item text-animation'
                                            : 'header__item'
                                    }
                                    onClick={() => handleNavClick('About')}
                                >
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'header__link link-active'
                                                : 'header__link'
                                        }
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li
                                    className={
                                        nav
                                            ? 'header__item text-animation'
                                            : 'header__item'
                                    }
                                    onClick={() => handleNavClick('CV')}
                                >
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'header__link link-active'
                                                : 'header__link'
                                        }
                                        to="/cv"
                                    >
                                        CV
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                <div className="header__actions-container">
                    <DarkMode />
                    {/* Only show hamburger menu if not simple variant */}
                    {!isSimpleVariant && (
                        <div className="hamburger" onClick={handleNav}>
                            {!nav ? (
                                <Bars3BottomRightIcon className="icon" />
                            ) : (
                                <XMarkIcon className="icon" />
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default NavBar
