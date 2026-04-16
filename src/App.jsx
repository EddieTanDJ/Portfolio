import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { aboutParagraphs, contactForm, experiences, hero, navItems, projects, skills, socialLinks } from './data/content'
import { APP_BACKGROUNDS, THEME_KEY, THEMES, isDarkTheme, nextTheme } from './lib/theme'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return THEMES.dark
    }

    return window.localStorage.getItem(THEME_KEY) ?? THEMES.dark
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => nextTheme(current))
  }

  const isDark = isDarkTheme(theme)
  const background = isDark ? APP_BACKGROUNDS.dark : APP_BACKGROUNDS.light

  return (
    <div className={`min-h-screen ${background.shell}`} data-theme={theme}>
      <div className="fixed inset-0 -z-10 bg-grain opacity-100" aria-hidden="true" />
      <div
        className="fixed left-[-8rem] top-24 -z-10 h-64 w-64 rounded-full bg-clay/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-10 right-[-4rem] -z-10 h-72 w-72 rounded-full bg-moss/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 -z-10 ${background.overlay}`}
        aria-hidden="true"
      />
      <Header
        navItems={navItems}
        resumeUrl={hero.resumeUrl}
        profileImage={hero.profileImage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero hero={hero} socialLinks={socialLinks} theme={theme} />
        <About paragraphs={aboutParagraphs} theme={theme} />
        <Skills items={skills} theme={theme} />
        <Experience items={experiences} theme={theme} />
        <Projects items={projects} theme={theme} />
        <Contact formConfig={contactForm} theme={theme} />
      </main>
      <Footer socialLinks={socialLinks} theme={theme} />
    </div>
  )
}

export default App
