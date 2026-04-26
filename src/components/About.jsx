/**
 * @file About.jsx
 * Presents a personal narrative and professional philosophy.
 * This section uses a multi-paragraph structure defined in the centralized data store.
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function About({ paragraphs }) {
  const { isDark } = useTheme()
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className={`rounded-[3.5rem] border p-8 md:p-12 lg:p-16 shadow-card backdrop-blur-md ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}>
        <div className="max-w-4xl space-y-10">
          <div className="text-left">
            <p className={`text-sm font-semibold uppercase tracking-[0.4em] ${isDark ? 'text-gold' : 'text-ink'}`}>About Me</p>
            <h2 className={`mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>
              Solving complex problems with Java and OutSystems.
            </h2>
          </div>

          <div className="grid gap-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed md:text-xl lg:leading-loose ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-start pt-6">
            <a
              href="#contact"
              className={`inline-flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] transition hover:-translate-y-1 ${isDark ? 'border-gold/40 bg-gold/10 text-gold hover:bg-gold hover:text-night' : 'border-ink/20 bg-ink/10 text-ink hover:bg-ink hover:text-sand'}`}
            >
              Let&apos;s connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
