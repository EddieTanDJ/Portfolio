/**
 * @file Hero.jsx
 * Displays the primary landing view, featuring an animated terminal-style 
 * typing effect to introduce the user's professional roles.
 */
import { useEffect, useState } from 'react'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Hero({ hero, socialLinks }) {
  // State for the roles typing animation
  const [activeRole, setActiveRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { isDark } = useTheme()
  const [count, setCount] = useState(0)

  /**
   * Orchestrates the typing/deleting animation cycle for the "I am a ..." section.
   * Leverages a recursive-style useEffect with timeouts to simulate human typing.
   */
  useEffect(() => {
    const currentWord = hero.roles[activeRole]
    const typingSpeed = isDeleting ? 40 : 100
    let timeoutId

    if (isDeleting) {
      // Logic for deleting text character by character
      if (displayedText === '') {
        setIsDeleting(false)
        setActiveRole((current) => (current + 1) % hero.roles.length)
      } else {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1))
        }, typingSpeed)
      }
    } else {
      // Logic for typing text character by character
      if (displayedText === currentWord) {
        // Once the full word is displayed, pause for readability before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      } else {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1))
        }, typingSpeed)
      }
    }

    // Cleanup ensures we don't have overlapping timeouts on state changes
    return () => clearTimeout(timeoutId)
  }, [displayedText, isDeleting, activeRole, hero.roles])

  return (
    <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <p className={`text-sm font-semibold uppercase tracking-[0.4em] ${isDark ? 'text-gold' : 'text-ink'}`}>Engineering with calm precision</p>
          <div className="space-y-6">
            <h1 className={`font-display text-6xl leading-[0.92] sm:text-7xl lg:text-8xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>
              {hero.title}
              <span className={`mt-3 block text-4xl sm:text-5xl lg:text-6xl ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
                Building products that solve real-world problems.
              </span>
            </h1>
            <p className={`max-w-2xl text-lg leading-8 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{hero.intro}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.ctaHref}
              className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] transition hover:-translate-y-0.5 ${isDark ? 'bg-gold text-night hover:bg-clay hover:text-sand' : 'bg-ink text-sand hover:bg-ink/90'}`}
            >
              {hero.ctaLabel}
            </a>
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] transition hover:-translate-y-0.5 hover:border-gold ${isDark ? SURFACE_STYLES.ghostButton.dark + ' hover:bg-white/10' : SURFACE_STYLES.ghostButton.light + ' hover:bg-white'}`}
            >
              Open Resume
            </a>
          </div>

          <div className={`rounded-[2rem] border p-6 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}>
            <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? SURFACE_STYLES.eyebrowText.dark : SURFACE_STYLES.eyebrowText.light}`}>I am a</p>
            <p className={`mt-3 font-display text-4xl ${isDark ? 'text-clay' : 'text-ink'}`}>
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Decorative background glow behind the profile image card */}
          <div className="absolute inset-x-8 bottom-6 top-8 rounded-[2rem] bg-gradient-to-br from-gold/30 via-clay/25 to-moss/25" aria-hidden="true" />
          <div className={`relative overflow-hidden rounded-[2.5rem] border p-6 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}>
            <img
              src={hero.profileImage}
              alt="Eddie Tan"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-gold ${isDark ? 'border-white/10 bg-night/80 text-sand' : 'border-ink/10 bg-sand text-ink'}`}
                >
                  <img 
                    src={link.icon} 
                    alt="" 
                    aria-hidden="true" 
                    className={`h-5 w-5 object-contain ${!isDark && link.label !== 'Email' ? 'brightness-0 grayscale' : ''}`} 
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
