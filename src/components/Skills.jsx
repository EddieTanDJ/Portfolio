/**
 * @file Skills.jsx
 * Renders categorized capability tags within a dedicated stylised container.
 */
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function Skills({ items }) {
  const { isDark } = useTheme()
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <SectionHeading
        eyebrow="Skills"
        title="The skills I picked up in my organization and personal projects."
      />

      {/* Specific visual container for the skills grid, deviating slightly from 
          other sections to emphasize the "toolbox" feel. */}
      <div
        className={`rounded-[3rem] border px-8 py-10 shadow-card md:px-12 ${isDark ? 'border-white/10 bg-slate/80 text-sand' : SURFACE_STYLES.section.light + ' text-ink'}`}
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
              <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-gold' : 'text-ink'}`}>
                Core Toolkit
              </p>
              <p className={`mt-3 max-w-2xl text-base leading-7 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
                A working set of technologies I use across enterprise delivery, personal builds, and day-to-day engineering.
              </p>
            </div>
            <span className={`inline-flex w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? 'border-white/10 bg-white/5 text-mist/90' : 'border-ink/10 bg-white/80 text-ink/70'}`}>
              {items.length} Skills
            </span>
          </div>

        {/* Mapping Skill items to stylised chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {items.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium tracking-[0.16em] shadow-sm backdrop-blur-sm ${isDark ? 'border-white/10 bg-white/8 text-mist/95' : 'border-ink/10 bg-white/85 text-ink/80'}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
