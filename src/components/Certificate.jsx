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
            title="My achievements and certifications achieved throughout my career."
            description="Credentials that validate my cloud, delivery, and agile foundations across enterprise projects."
          />
            <div className="mt-12 grid gap-6">
                {
                    items.map((item) => (
                        <article
                            key={`${item.title}-${item.issuer}`}
                            className={`relative overflow-hidden rounded-[2rem] border p-7 shadow-card backdrop-blur ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
                        >
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span
                                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${
                                            isDark
                                                ? 'border-gold/45 bg-gold/10 text-gold'
                                                : 'border-ink/20 bg-ink/10 text-ink'
                                        }`}
                                    >
                                        Verified Credential
                                    </span>
                                </div>

                                <h3 className={`mt-5 font-display text-3xl leading-tight md:text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{item.title}</h3>

                                <p className={`mt-3 text-sm font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-mist/80' : 'text-ink/60'}`}>
                                    Issued by {item.issuer}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className={`rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${isDark ? SURFACE_STYLES.subtle.dark : SURFACE_STYLES.subtle.light}`}>
                                        Issued {item.issueDate}
                                    </span>
                                    {item.expiryDate ? (
                                        <span className={`rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${isDark ? SURFACE_STYLES.subtle.dark : SURFACE_STYLES.subtle.light}`}>
                                            Expires {item.expiryDate}
                                        </span>
                                    ) : (
                                        <span className={`rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.08em] ${isDark ? SURFACE_STYLES.subtle.dark : SURFACE_STYLES.subtle.light}`}>
                                            No Expiry
                                        </span>
                                    )}
                                </div>

                                <p className={`mt-5 text-base leading-7 md:text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{item.description}</p>

                                <a
                                    href={item.credentialUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
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