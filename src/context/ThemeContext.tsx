import { createContext, useState, useEffect, ReactNode } from 'react'

// Define the type for the context value
export interface ThemeContextType {
    theme: 'light' | 'dark' // Define the allowed values for theme
    toggleTheme: () => void // Function to toggle the theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Define the props for the ThemeProvider
interface ThemeProviderProps {
    children: ReactNode // Allows passing React components as children
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('selectedTheme')
        return savedTheme === 'dark' || savedTheme === 'light'
            ? savedTheme
            : 'light'
    })

    useEffect(() => {
        // Update the body's data-theme attribute when theme changes
        document.body.setAttribute('data-theme', theme)
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
