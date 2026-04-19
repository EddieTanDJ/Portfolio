import { useTheme } from '../context/ThemeContext'

export function Footer({ socialLinks }) {
  const { isDark } = useTheme()
  return (
    <footer className={`border-t px-6 py-10 lg:px-10 ${isDark ? 'border-white/10 bg-ink text-sand' : 'border-ink/10 bg-ink text-sand'}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sand/60">Eddie Tan</p>
          <h2 className="mt-3 font-display text-4xl">Software engineer with a bias for clarity and useful systems.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-sand/80 transition hover:border-gold hover:text-gold"
            >
              <img src={link.icon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-sand/55">
        &copy; Eddie Tan. Crafted in React for GitHub Pages.
      </div>
    </footer>
  )
}
