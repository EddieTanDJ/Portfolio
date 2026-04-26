import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { experiences, projects } from './data/content'

// Helper to render with ThemeProvider
const renderApp = () => render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('renders the main portfolio sections', () => {
    renderApp()

    expect(document.querySelector('#about')).toBeInTheDocument()
    expect(document.querySelector('#skills')).toBeInTheDocument()
    expect(document.querySelector('#experience')).toBeInTheDocument()
    expect(document.querySelector('#projects')).toBeInTheDocument()
    expect(document.querySelector('#contact')).toBeInTheDocument()
  })

  it('renders experience and project data from the content module', () => {
    renderApp()

    experiences.forEach((item) => {
      expect(screen.getByText(item.role)).toBeInTheDocument()
    })

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('includes anchor navigation for key sections', () => {
    renderApp()

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders the contact form fields and submit button', () => {
    renderApp()

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    renderApp()

    const toggle = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggle)

    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))

    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('adds secure rel attributes to external links', () => {
    renderApp()

    const resumeLinks = screen.getAllByRole('link', { name: /resume/i })
    resumeLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })
  })

  it('toggles between light and dark mode and persists the choice', async () => {
    const user = userEvent.setup()
    renderApp()

    // Default is light
    expect(document.documentElement.dataset.theme).toBe('light')

    // Find and click the toggle to dark mode
    await user.click(screen.getAllByRole('button', { name: /switch to dark mode/i })[0])

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark')
  })
})
