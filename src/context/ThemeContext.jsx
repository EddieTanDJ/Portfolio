/**
 * @file ThemeContext.jsx
 * Provides global state management for the application's appearance (Light vs Dark mode).
 * 
 * This context is responsible for initializing the theme based on local storage,
 * providing the current theme state to components, and synchronizing state with
 * the document DOM and persistence layers.
 */
import { createContext, useContext, useEffect, useState } from 'react'
import { THEME_KEY, THEMES, isDarkTheme, nextTheme } from '../lib/theme'

const ThemeContext = createContext(null)

/**
 * Higher-order component to provide theme capabilities.
 * Manages the underlying 'theme' state and local storage persistence.
 */
export function ThemeProvider({ children }) {
  // Lazy initialization of state: attempts to read from localStorage if in a browser context.
  // Defaults to THEMES.light if no preference is found.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return THEMES.light
    }

    return window.localStorage.getItem(THEME_KEY) ?? THEMES.light
  })

  // Synchronize state with both the <html> element and localStorage.
  // Using data-theme attribute on documentElement allows CSS variables and Tailwind 
  // selectors to react to the theme change globally.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  /**
   * Helper to derive the next valid theme state. 
   * Abstracts the toggle logic to the separate lib/theme utility.
   */
  const toggleTheme = () => {
    setTheme((current) => nextTheme(current))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: isDarkTheme(theme),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * Custom hook for consuming the ThemeContext.
 * Ensures the component is wrapped in a ThemeProvider to avoid undefined behavior.
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
