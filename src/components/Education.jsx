/**
 * @file Education.jsx
 * Presents an education or academic achievement
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Education({ items }) {
    const { isDark } = useTheme()
    
    return (
        <section id="education" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionHeading
            eyebrow="Education"
            title="My academic background and educational achievements."
          />
            <div className="mt-12 grid gap-6">
                {
                    items.map((item) => (
                        <article
                            key={`${item.degree}-${item.institution}`}
                            className={`relative overflow-hidden rounded-[2rem] border p-7 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
                        >
                            <div className="relative">
                                <h3 className={`mt-5 font-display text-3xl leading-tight md:text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.degree}</h3>
                                <p className={`mt-2 text-lg ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.institution}</p>
                                <p className={`mt-3 text-sm font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-mist/80' : 'text-ink/60'}`}>
                                    {item.period}
                                </p>
                                <ul className={`mt-5 space-y-3 text-base leading-7 md:text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
                                    {item.highlights.map((highlight) => (
                                        <li key={highlight} className="flex gap-3">
                                            <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${isDark ? 'bg-gold' : 'bg-ink'}`} aria-hidden="true" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))
                }
            </div>  
        </section>
    )
}
