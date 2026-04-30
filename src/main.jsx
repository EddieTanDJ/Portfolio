/**
 * @file main.jsx
 * Application entry point for the React-based portfolio.
 * 
 * This file initializes the React root and wraps the application with the 
 * necessary Context Providers. Using StrictMode helps identify potential 
 * problems in the application during development.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

// Initialize the root element and render the application tree
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
