import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES, isDarkTheme } from '../lib/theme'

export function Skills({ items, theme }) {
  const isDark = isDarkTheme(theme)
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div
        className={`rounded-[3rem] border px-8 py-10 shadow-card md:px-12 ${isDark ? 'border-white/10 bg-slate/80 text-sand' : SURFACE_STYLES.section.light + ' text-ink'}`}
      >
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit built across enterprise systems, product delivery, and full-stack craft."
          description="These are the capabilities I reach for most often when shipping software that has to work well in real organizations."
          theme={theme}
        />
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
