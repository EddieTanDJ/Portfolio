/**
 * @file Certificate.jsx
 * Presents a certificate or achievement over my career
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Certificate({ items }) {
    const { isDark } = useTheme()
    
    return (
        <section id="certificate" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionHeading
            eyebrow="Certificates"
            title="My achievements and certifications achieved throughout my career."  />
            <div className="mt-12 grid gap-6">
                {
                    items.map((item) => (
                        <article
                            key={`${item.title}-${item.issuer}`}
                            className={`rounded-[2rem] border p-7 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
                        >
                            <div>
                                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${isDark ? 'text-gold' : 'text-ink'}`}>
                                    {item.issueDate} {item.expiryDate ? `- ${item.expiryDate}` : ''}
                                </p>
                                <h3 className={`mt-3 font-display text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.title}</h3>
                                <p className={`mt-2 text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{item.issuer}</p>
                                <p className={`mt-4 text-lg leading-7 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{item.description}</p>
                                <a
                                    href={item.credentialUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={`inline-flex items-center justify-center rounded-full px-5 py-3 mt-6 text-sm font-semibold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 ${
                                        isDark
                                            ? 'bg-gold text-night hover:bg-clay hover:text-sand'
                                            : 'bg-ink text-sand hover:bg-ink/90'
                                    }`} 
                                >
                                    View Credential
                                </a>    
                            </div>
                        </article>
                    ))  
                }
            </div>
        </section>
    )
}