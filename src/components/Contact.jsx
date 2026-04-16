import { useMemo, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { SURFACE_STYLES, isDarkTheme } from '../lib/theme'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

export function Contact({ formConfig, theme }) {
  const [values, setValues] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const isDark = isDarkTheme(theme)

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors])

  const validate = (nextValues) => {
    const nextErrors = {}

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = 'Please use a valid email address.'
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = 'Please include a short message.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    validate(nextValues)
  }

  const handleSubmit = (event) => {
    if (!validate(values)) {
      event.preventDefault()
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className={`grid gap-12 rounded-[3rem] border px-8 py-10 shadow-card backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:px-12 ${isDark ? SURFACE_STYLES.section.dark : SURFACE_STYLES.section.light}`}>
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something useful together."
            description="If you have an opportunity, collaboration idea, or product challenge in mind, send me a message."
            theme={theme}
          />
          <div className={`mt-8 space-y-4 text-base leading-7 ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
            <p>I&apos;m especially interested in practical software work where good engineering improves everyday operations.</p>
            <p>Healthcare systems, internal tools, platform modernization, and product-minded engineering are all welcome conversations.</p>
          </div>
        </div>

        <form action={formConfig.endpoint} method="POST" onSubmit={handleSubmit} noValidate className="grid gap-5">
          <input type="hidden" name="access_key" value={formConfig.accessKey} />
          <input type="hidden" name="subject" value={formConfig.subject} />
          <input type="hidden" name="redirect" value={formConfig.redirect} />
          <input type="hidden" name="from_name" value={formConfig.fromName} />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

          <Field
            id="name"
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            error={errors.name}
            required
            theme={theme}
            onChange={handleChange}
          />
          <Field
            id="email"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            error={errors.email}
            required
            theme={theme}
            onChange={handleChange}
          />
          <Field
            as="textarea"
            id="message"
            label="Message"
            name="message"
            placeholder="Tell me a little about your project or opportunity"
            value={values.message}
            error={errors.message}
            required
            theme={theme}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-night transition hover:-translate-y-0.5 hover:bg-clay hover:text-sand disabled:cursor-not-allowed disabled:opacity-70"
            disabled={!isValid && Object.values(values).some((value) => value)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ as = 'input', error, id, label, theme, ...props }) {
  const Component = as
  const isDark = isDarkTheme(theme)

  return (
    <div>
      <label htmlFor={id} className={`mb-2 block text-sm font-semibold uppercase tracking-[0.24em] ${isDark ? SURFACE_STYLES.mutedText.dark : SURFACE_STYLES.mutedText.light}`}>
        {label}
      </label>
      <Component
        id={id}
        rows={as === 'textarea' ? 7 : undefined}
        className={`w-full rounded-[1.5rem] border px-5 py-4 text-base outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/30 ${isDark ? SURFACE_STYLES.input.dark : SURFACE_STYLES.input.light}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-clay">
          {error}
        </p>
      ) : null}
    </div>
  )
}
