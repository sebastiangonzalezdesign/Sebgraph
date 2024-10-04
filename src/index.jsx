import React from 'react'
import ReactDOM from 'react-dom/client' // Change the import here
import './index.scss'
import App from './App'

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root')) // Use createRoot instead

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
