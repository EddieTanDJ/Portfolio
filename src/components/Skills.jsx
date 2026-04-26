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
      {/* Specific visual container for the skills grid, deviating slightly from 
          other sections to emphasize the "toolbox" feel. */}
      <div
        className={`rounded-[3rem] border px-8 py-10 shadow-card md:px-12 ${isDark ? 'border-white/10 bg-slate/80 text-sand' : SURFACE_STYLES.section.light + ' text-ink'}`}
      >
        <SectionHeading
          eyebrow="Skills"
          title="The skills I picked up in my organization and personal projects."
        />
        
        {/* Mapping Skill items to stylised chips */}
        <div className="mt-10 flex flex-wrap gap-3">
          {items.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full border px-5 py-3 text-sm font-medium tracking-[0.16em] ${isDark ? 'border-white/10 bg-white/5 text-mist/95' : SURFACE_STYLES.subtle.light}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
