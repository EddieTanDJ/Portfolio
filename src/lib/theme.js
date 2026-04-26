/**
 * @file theme.js
 * Utility library for centralizing theme-related constants and visual design logic.
 * 
 * This module defines the Tailwind class mappings for different UI "surfaces",
 * ensuring that color contrast and aesthetics remain consistent across both 
 * light and dark modes without cluttering individual components with conditional logic.
 */

export const THEMES = {
  dark: 'dark',
  light: 'light',
}

// Local storage key for theme persistence
export const THEME_KEY = 'portfolio-theme'

/**
 * Tailwind class mappings for stylized UI elements.
 * Following a naming convention for different UI parts (e.g., surface, ghostButton)
 * allows for quick global design adjustments from a single location.
 */
export const SURFACE_STYLES = {
  section: {
    dark: 'border-white/10 bg-white/5',
    light: 'border-ink/10 bg-white/70',
  },
  subtle: {
    dark: 'border-white/10 bg-night/70 text-mist/80',
    light: 'border-ink/10 bg-sand text-ink/75',
  },
  ghostButton: {
    dark: 'border-white/15 bg-white/5 text-sand',
    light: 'border-ink/15 bg-white/70 text-ink',
  },
  header: {
    dark: 'border-white/10 bg-night/80',
    light: 'border-ink/10 bg-sand/85',
  },
  mobileMenu: {
    dark: 'border-white/10 bg-slate/95',
    light: 'border-ink/10 bg-sand/95',
  },
  input: {
    dark: 'border-white/10 bg-night/80 text-sand placeholder:text-mist/35',
    light: 'border-ink/15 bg-sand text-ink placeholder:text-ink/35',
  },
  text: {
    dark: 'text-sand',
    light: 'text-ink',
  },
  mutedText: {
    dark: 'text-mist/80',
    light: 'text-ink/75',
  },
  eyebrowText: {
    dark: 'text-mist/55',
    light: 'text-ink/55',
  },
}

/**
 * Global background styles for the main App shell.
 * Controls the overall color palette and the opacity of visual overlays.
 */
export const APP_BACKGROUNDS = {
  dark: {
    shell: 'bg-night text-sand',
    overlay: 'bg-[linear-gradient(180deg,rgba(4,7,13,0.1),rgba(4,7,13,0.82))]',
  },
  light: {
    shell: 'bg-sand text-ink',
    overlay: 'bg-[linear-gradient(180deg,rgba(248,241,231,0.08),rgba(248,241,231,0.42))]',
  },
}

// Logic helpers to check current theme state
export function isDarkTheme(theme) {
  return theme === THEMES.dark
}

// Determines the next theme value when toggling
export function nextTheme(theme) {
  return isDarkTheme(theme) ? THEMES.light : THEMES.dark
}

/**
 * Display labels and accessibility descriptions for theme UI controls.
 */
export function themeLabel(theme) {
  return isDarkTheme(theme) ? 'Light Mode' : 'Dark Mode'
}

export function compactThemeLabel(theme) {
  return isDarkTheme(theme) ? 'Light' : 'Dark'
}

export function themeAriaLabel(theme) {
  return `Switch to ${isDarkTheme(theme) ? THEMES.light : THEMES.dark} mode`
}
