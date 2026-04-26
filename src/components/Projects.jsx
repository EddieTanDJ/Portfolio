/**
 * @file Projects.jsx
 * Visual showcase of portfolio projects with dynamic image positioning.
 * Each project includes descriptions, technology tags, and relevant external links.
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Projects({ items }) {
  const { isDark } = useTheme()
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <SectionHeading
        eyebrow="Projects"
        title="My Personal Projects"
        description="A mix of personal and collaborative work across mobile, web, AI, and enterprise-flavored products."
      />
      <div className="mt-12 grid gap-8">
        {items.map((project, index) => (
          <article
            key={project.title}
            /**
             * Alternates the layout (image left vs image right) using the array index.
             * This provides visual variety and a better reading rhythm for long lists.
             */
            className={`grid gap-6 overflow-hidden rounded-[2.25rem] border p-5 shadow-card backdrop-blur lg:grid-cols-2 lg:p-6 ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}
          >
            {/* Image container: Conditional ordering based on index parity */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full min-h-80 w-full rounded-[1.75rem] object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content container: Conditional ordering based on index parity */}
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-gold' : 'text-ink'}`}>Project {index + 1}</p>
              <h3 className={`mt-3 font-display text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>{project.title}</h3>
              <p className={`mt-4 text-lg leading-8 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>{project.description}</p>
              
              {/* Categorization tags for technical stack identification */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${isDark ? SURFACE_STYLES.subtle.dark : SURFACE_STYLES.subtle.light}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Dynamic Action Links (Download APK, View Code, etc.) */}
              {project.links?.length ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 hover:border-gold hover:text-gold ${isDark ? SURFACE_STYLES.ghostButton.dark : SURFACE_STYLES.ghostButton.light}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
