import './App.css'
import { useState, useEffect } from 'react'
import { Section } from './components/Section'
import { TimelineList } from './components/TimelineList'
import { SkillGroup } from './components/SkillGroup'
import { ProjectCard } from './components/ProjectCard'
import { ContactCard } from './components/ContactCard'
import { portfolio } from './data/portfolioData'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [isDark])

  const [firstName, ...remainingNames] = portfolio.name.split(' ')
  const lastName = remainingNames.join(' ')

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          {portfolio.shortName}
        </a>

        <div className="topbar-actions">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <button className="theme-toggle" onClick={() => setIsDark(!isDark)} title="Alternar tema">
            {isDark ? (
              <svg viewBox="0 0 24 24" focusable="false">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>

        <nav className={`nav${isMenuOpen ? ' nav-open' : ''}`} id="site-navigation">
          <button
            className="nav-close"
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <span />
            <span />
          </button>
          <a href="#experiencia" onClick={() => setIsMenuOpen(false)}>Experiência</a>
          <a href="#projectos" onClick={() => setIsMenuOpen(false)}>Projectos</a>
          <a href="#formacao" onClick={() => setIsMenuOpen(false)}>Formação</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contactos" onClick={() => setIsMenuOpen(false)}>Contactos</a>
        </nav>
      </header>

      {isMenuOpen ? <button className="nav-backdrop" type="button" aria-label="Fechar menu" onClick={() => setIsMenuOpen(false)} /> : null}

      <main>
        <section className="hero" id="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-copy-intro">
                {portfolio.greeting}
                <h1>
                  <span className="hero-name-line hero-name-line-primary">{firstName}</span>
                  {lastName ? <span className="hero-name-line hero-name-line-secondary">{lastName}</span> : null}
                </h1>
                <p className="hero-role">{portfolio.role}</p>
                <p className="hero-summary">{portfolio.summary}</p>
              </div>

              <div className="hero-copy-tail">
                <div className="hero-actions">
                  <a className="button button-primary" href={`mailto:${portfolio.email}`}>
                    <span className="button-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path
                          d="M21 4L10 15"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M21 4L14 20L10 15L5 11L21 4Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    Entrar em contacto
                  </a>
                  <a className="button button-secondary" href="#projectos">
                    <span className="button-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path
                          d="M3 7.5C3 6.67 3.67 6 4.5 6H19.5C20.33 6 21 6.67 21 7.5V18C21 18.83 20.33 19.5 19.5 19.5H4.5C3.67 19.5 3 18.83 3 18V7.5Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 6V4.5C8 3.67 8.67 3 9.5 3H14.5C15.33 3 16 3.67 16 4.5V6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    Ver projectos
                  </a>
                </div>

              </div>
            </div>

            <aside className="hero-panel">
              <div className="hero-panel-glow hero-panel-glow-left" aria-hidden="true" />
              <div className="hero-panel-glow hero-panel-glow-right" aria-hidden="true" />
              <div className="hero-panel-dots" aria-hidden="true" />
              <div className="hero-photo-frame">
                <div className="hero-photo-wrap">
                  <img
                    className="hero-photo"
                    src={portfolio.photo}
                    alt={`Foto de perfil de ${portfolio.name}`}
                  />
                </div>
              </div>

              <div className="hero-panel-location">
                <span className="location-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M12 21C15.5 16.8 18 13.9 18 10.5C18 6.91 15.31 4 12 4C8.69 4 6 6.91 6 10.5C6 13.9 8.5 16.8 12 21Z"
                      fill="currentColor"
                    />
                    <circle cx="12" cy="10.5" r="2.2" fill="#ffffff" />
                  </svg>
                </span>
                <strong>{portfolio.location}</strong>
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="experiencia"
          split={false}
          minimal
        >
          <TimelineList items={portfolio.experience} variant="editorial" />
        </Section>

        <Section
          id="projectos"
          eyebrow="Projectos"
          split={false}
          minimal
        >
          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="formacao"
          split={false}
          minimal
        >
          <TimelineList items={portfolio.education} variant="education" />
        </Section>

        <Section
          id="skills"
          eyebrow="Habilidades"
          split={false}
          minimal
        >
          <div className="skills-grid">
            {portfolio.skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </Section>

        <Section
          id="contactos"
          eyebrow="Contacto"
          split={false}
          minimal
        >
          <div className="contact-section contact-section-inspired">
            <div className="contact-links-list contact-links-list-compact">
              {portfolio.contactLinks.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} {portfolio.name}. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
