import './App.css'
import { useEffect, useState } from 'react'
import { Section } from './components/Section'
import { TimelineList } from './components/TimelineList'
import { SkillGroup } from './components/SkillGroup'
import { FeaturedProject } from './components/FeaturedProject'
import { ProjectList } from './components/ProjectList'
import Courses from './components/Courses'
import { portfolio } from './data/portfolioData'

function getInitialTheme() {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

const featuredProjects = portfolio.projects.filter((project) => project.featured)
const otherProjects = portfolio.projects.filter((project) => !project.featured)

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const [menuOpen, setMenuOpen] = useState(false)

  // Faz aparecer suavemente os elementos marcados com data-reveal quando entram no ecrã
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const close = () => setMenuOpen(false)
    const onKey = (event) => {
      if (event.key === 'Escape') close()
    }
    const desktop = window.matchMedia('(min-width: 641px)')
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', close)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', close)
    }
  }, [menuOpen])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={portfolio.name}>
          <img className="brand-photo" src={portfolio.photo} alt="" />
          <span>LM</span>
        </a>
        <div className="topbar-actions">
          <nav
            id="menu-principal"
            className={`nav${menuOpen ? ' nav-open' : ''}`}
            aria-label="Menu principal"
            onClick={(event) => {
              if (event.target.closest('a')) setMenuOpen(false)
            }}
          >
            <a href="#projectos">Projectos</a>
            <a href="#percurso">Percurso</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
            </svg>
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{portfolio.name}</h1>
          <p className="hero-role">
            {portfolio.role} <span className="hero-sep">·</span> {portfolio.location}
          </p>
          <p className="hero-summary">{portfolio.summary}</p>
          <div className="hero-links">
            <a className="hero-email" href={`mailto:${portfolio.email}`}>
              {portfolio.email}
            </a>
            {portfolio.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <Section id="projectos" title="Projectos" wide>
          <div className="features">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} reverse={index % 2 === 1} />
            ))}
          </div>

          {otherProjects.length ? (
            <div className="more-projects">
              <h3 className="more-projects-title">Outros projectos</h3>
              <ProjectList projects={otherProjects} />
            </div>
          ) : null}
        </Section>

        <Section id="percurso" title="Experiência">
          <TimelineList items={portfolio.experience} />
        </Section>

        <Section title="Formação">
          <TimelineList items={portfolio.education} />
        </Section>

        <Section title="Cursos">
          <Courses courses={portfolio.courses} />
        </Section>

        <Section title="Competências">
          <ul className="rows">
            {portfolio.skills.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </ul>
        </Section>

        <Section id="contacto" title="Contacto">
          <p className="contact-text">
            Estou aberto a novos projectos e oportunidades. Se tiver uma ideia ou uma proposta em mente,
            envie-me um email.
          </p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            {portfolio.email}
          </a>
        </Section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <div className="footer-links">
          {portfolio.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
