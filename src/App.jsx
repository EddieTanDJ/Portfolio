import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { aboutParagraphs, contactForm, experiences, hero, navItems, projects, skills, socialLinks } from './data/content'
import { APP_BACKGROUNDS } from './lib/theme'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark, theme } = useTheme()
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
      />
      <main>
        {/* Hero section */}
        <Hero hero={hero} socialLinks={socialLinks} />
        {/* About section */}
        <About paragraphs={aboutParagraphs} />
        {/* Skills section */}
        <Skills items={skills} />
        {/* Experience section*/}
        <Experience items={experiences} />
        {/* Projects section*/}
        <Projects items={projects} />
        {/* Contact section */}
        <Contact formConfig={contactForm} />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  )
}

export default App
