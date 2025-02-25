import RoutesSite from './components/RoutesSite'
import './index.scss'
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <div className="app">
                    <HelmetProvider>
                        <RoutesSite />
                    </HelmetProvider>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
