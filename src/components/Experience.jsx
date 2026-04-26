import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Experience({ items }) {
  const { isDark } = useTheme()
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Professional Experience"
        title="Work shaped by delivery, modernization, and steady execution."
        description="A snapshot of the environments where I have translated requirements into durable software outcomes."
      />
      <div className="mt-12 grid gap-6">
        {items.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className={`rounded-[2rem] border p-7 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
          >
            <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${isDark ? 'text-gold' : 'text-ink'}`}>{item.period}</p>
                <h3 className={`mt-3 font-display text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.role}</h3>
                <p className={`mt-2 text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{item.company}</p>
              </div>
              <ul className={`space-y-3 text-base leading-7 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${isDark ? 'bg-gold' : 'bg-ink'}`} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
