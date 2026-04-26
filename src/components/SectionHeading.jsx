/**
 * @file SectionHeading.jsx
 * Presentational component for consistent section titles and subtitles.
 * Supports an 'invert' prop for cases where the heading sits on a dark background 
 * regardless of the global theme choice.
 */
import { SURFACE_STYLES } from '../lib/theme'
import { useTheme } from '../context/ThemeContext'

export function SectionHeading({ eyebrow, title, description, invert = false }) {
  const { isDark } = useTheme()
  
  // Logic to determine text coloring based on either the global theme state
  // or a specific component override via the 'invert' prop.
  const textColor = invert || isDark ? SURFACE_STYLES.text.dark : SURFACE_STYLES.text.light
  const mutedColor = invert || isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light

  return (
    <div className="">
      {/* Optional eyebrow text for context labelling */}
      {eyebrow ? (
        <p className={`mb-4 text-lg font-bold uppercase tracking-[0.5em] ${mutedColor}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`font-display text-4xl leading-tight md:text-4xl ${textColor}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${mutedColor}`}>{description}</p> : null}
    </div>
  )
}
