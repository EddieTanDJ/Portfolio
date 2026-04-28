/**
 * @file Certificate.jsx
 * Presents a certificate or achievement over my career
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Certificate({ items }) {
    const { isDark } = useTheme()
    
    // items might be an object or an array based on content.js
    const certificationList = Array.isArray(items) ? items : [items]

    return (
        <section id="certificate" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionHeading
            eyebrow="Certificates"
            title="My achievements and certifications throughout my career."  />
            <div className="mt-12 grid gap-6">
                {
                    certificationList.map((item) => (
                        <article
                            key={`${item.title}-${item.issuer}`}
                            className={`rounded-[2rem] border p-7 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
                        >
                            <div>
                                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${isDark ? 'text-gold' : 'text-ink'}`}>{item.issueDate}</p>
                                <h3 className={`mt-3 font-display text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.title}</h3>
                                <p className={`mt-2 text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{item.issuer}</p>
                            </div>
                        </article>
                    ))  
                }
            </div>
        </section>
    )
}