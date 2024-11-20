import React from 'react'
import ReactDOM from 'react-dom/client' // Change the import here
import './index.scss'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error("Root element with id 'root' not found")
}

// Create a root element
const root = ReactDOM.createRoot(rootElement)

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
