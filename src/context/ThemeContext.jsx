import { createContext, useContext, useEffect, useState } from 'react'
import { THEME_KEY, THEMES, isDarkTheme, nextTheme } from '../lib/theme'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return THEMES.light
    }

    return window.localStorage.getItem(THEME_KEY) ?? THEMES.light
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

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

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
