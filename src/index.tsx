import React from 'react'
import ReactDOM from 'react-dom/client' // Change the import here
import './index-critical.scss'
import App from './App'
import { initGA } from './services/analytics'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error("Root element with id 'root' not found")
}

// Initialize Google Analytics
initGA()

// Create a root element
const root = ReactDOM.createRoot(rootElement)

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
