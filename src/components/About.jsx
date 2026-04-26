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
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="About"
            title="A builder who likes elegant systems and useful outcomes."
            description="I care about the quality of the system behind the interface just as much as the experience in front of it."
          />
        </div>

        {/* Narrative area: Maps the paragraphs array from content.js into stylised card blocks. */}
        <div className="grid gap-5">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={`rounded-[2rem] border p-6 text-lg leading-8 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark + ' ' + SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.section.light + ' ' + SURFACE_STYLES.mutedText.light}`}
            >
              {paragraph}
            </p>
          ))}
          
          {/* Internal call-to-action to skip to the contact form */}
          <a
            href="#contact"
            className={`inline-flex w-fit items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition hover:bg-gold hover:text-night ${isDark ? 'border-gold/40 bg-gold/10 text-gold' : 'border-ink/20 bg-ink/10 text-ink hover:border-gold'}`}
          >
            Let&apos;s connect
          </a>
        </div>
      </div>
    </section>
  )
}
