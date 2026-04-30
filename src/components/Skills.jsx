/**
 * @file Skills.jsx
 * Renders categorized capability tags within a dedicated stylised container.
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Skills({ items }) {
  const { isDark } = useTheme()
  const categorizedItems =
    Array.isArray(items) && items[0]?.skills
      ? items
      : [
          {
            category: 'Skillsets',
            skills: items.map((skill) => skill.name),
          },
        ]

  const totalSkills = categorizedItems.reduce(
    (count, group) => count + group.skills.length,
    0,
  )

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <SectionHeading
        eyebrow="Skills"
        title="Skills acquired through professional, academic, and personal project experiences"
      />

      {/* Specific visual container for the skills grid, deviating slightly from 
          other sections to emphasize the "toolbox" feel. */}
      <div
        className={`relative mt-12 rounded-[3rem] border px-8 py-10 shadow-card md:px-12 ${isDark ? 'border-white/10 bg-slate/80 text-sand' : SURFACE_STYLES.section.light + ' text-ink'}`}
      >
        <div
          aria-hidden="true"
          className={`absolute -right-12 top-0 h-40 w-40 rounded-full blur-3xl ${isDark ? 'bg-gold/12' : 'bg-clay/10'}`}
        />
        <div
          aria-hidden="true"
          className={`absolute -bottom-16 left-0 h-36 w-36 rounded-full blur-3xl ${isDark ? 'bg-moss/12' : 'bg-gold/10'}`}
        />

        <div className="relative">
          <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`font-display text-4xl ${isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light}`}>
                Key Skills and  Technical Expertise
              </h2>
              <p className={`mt-3 max-w-4xl text-base leading-7 md:text-lg ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
                Technologies I use across enterprise delivery, personal builds, and day-to-day engineering.
              </p>
            </div>
            <span className={`inline-flex w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? 'border-white/10 bg-white/5 text-mist/90' : 'border-ink/10 bg-white/80 text-ink/70'}`}>
              {totalSkills} Skills
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {categorizedItems.map((group) => (
              <div
                key={group.category}
                className={`rounded-2xl border p-5 ${isDark ? 'border-white/10 bg-white/5' : 'border-ink/10 bg-white/70'}`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-gold' : 'text-ink/70'}`}>
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${isDark ? SURFACE_STYLES.subtle.dark : SURFACE_STYLES.subtle.light}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
