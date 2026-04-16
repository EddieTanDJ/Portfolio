import { useEffect, useState } from 'react'
import { SURFACE_STYLES, compactThemeLabel, isDarkTheme, themeAriaLabel, themeLabel } from '../lib/theme'

export function Header({ navItems, onToggleTheme, profileImage, resumeUrl, theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const isDark = isDarkTheme(theme)

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
            onClick={onToggleTheme}
            className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
            aria-label={themeAriaLabel(theme)}
          >
            {themeLabel(theme)}
          </button>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
            aria-label={themeAriaLabel(theme)}
          >
            {compactThemeLabel(theme)}
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
              className="mt-2 inline-flex w-fit rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-night"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              className={`inline-flex w-fit rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
              aria-label={themeAriaLabel(theme)}
            >
              {themeLabel(theme)}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
