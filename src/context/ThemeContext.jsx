import { createContext, useState, useEffect } from 'react'
import React from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Initial theme based on localStorage or fallback to light
        const savedTheme = localStorage.getItem('selectedTheme')
        return savedTheme ? savedTheme : 'light'
    })

    useEffect(() => {
        // Update the body's data-theme attribute when theme changes
        document.querySelector('body').setAttribute('data-theme', theme)
        localStorage.setItem('selectedTheme', theme)
    }, [theme])

    const toggleTheme = () => {
        // Toggle between light and dark themes
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    const data = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext
