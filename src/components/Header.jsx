import { useEffect, useState } from 'react'
import { SURFACE_STYLES, compactThemeLabel, themeAriaLabel, themeLabel } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Header({ navItems, profileImage, resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isDark ? SURFACE_STYLES.header.dark : SURFACE_STYLES.header.light}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <img
            src={profileImage}
            alt="Portrait of Eddie Tan"
            className={`h-12 w-12 rounded-full border object-cover shadow-card ${isDark ? 'border-white/10' : 'border-ink/10'}`}
          />
          <div>
            <p className={`font-display text-2xl tracking-wide ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>Eddie Tan</p>
            <p className={`text-xs uppercase tracking-[0.35em] ${isDark ? SURFACE_STYLES.eyebrowText.dark : SURFACE_STYLES.eyebrowText.light}`}>Software Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-[0.25em] transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${isDark ? 'text-mist/80' : 'text-ink/75'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
            aria-label={themeAriaLabel(theme)}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
            aria-label={themeAriaLabel(theme)}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${isDark ? 'border-white/15 text-sand' : 'border-ink/15 text-ink'}`}
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="text-2xl">{isOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`border-t px-6 py-5 lg:hidden ${isDark ? SURFACE_STYLES.mobileMenu.dark : SURFACE_STYLES.mobileMenu.light}`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold uppercase tracking-[0.28em] ${isDark ? 'text-mist/90' : 'text-ink/80'}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`mt-2 inline-flex w-fit rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? 'bg-gold text-night' : 'bg-ink text-sand'}`}
            >
              Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
              aria-label={themeAriaLabel(theme)}
            >
              {isDark ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
