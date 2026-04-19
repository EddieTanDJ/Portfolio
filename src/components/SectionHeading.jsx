import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function SectionHeading({ eyebrow, title, description, invert = false }) {
  const { isDark } = useTheme()
  const textColor = invert || isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light
  const mutedColor = invert || isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${mutedColor}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`font-display text-5xl leading-none md:text-6xl ${textColor}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${mutedColor}`}>{description}</p> : null}
    </div>
  )
}
