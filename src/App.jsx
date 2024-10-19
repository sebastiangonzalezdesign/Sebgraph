import RoutesSite from './components/RoutesSite'
import './index.scss'
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <HelmetProvider>
                    <RoutesSite />
                </HelmetProvider>
            </div>
        </ThemeProvider>
    )
}

export default App
