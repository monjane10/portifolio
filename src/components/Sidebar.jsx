import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolioData'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { id: 'sobre', label: 'Sobre', href: '#/' },
  { id: 'projectos', label: 'Projectos', href: '#/projectos' },
  { id: 'percurso', label: 'Percurso', href: '#/percurso' },
]

// Marca no índice a secção que está a ser lida
function useActiveHeading(headings) {
  const [active, setActive] = useState(headings?.[0]?.id)

  useEffect(() => {
    if (!headings?.length || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '0px 0px -70% 0px' },
    )
    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  return active
}

export function Sidebar({ current, headings }) {
  const active = useActiveHeading(headings)
  const [roleA, roleB] = portfolio.roles

  // Página de projecto: só o regresso à lista e o índice do artigo, como num livro
  if (headings) {
    return (
      <aside className="sidebar sidebar-article">
        <a className="back-link" href="#/projectos">
          <span aria-hidden="true">↩</span> {portfolio.labels.backToIndex}
        </a>

        <ThemeToggle />

        <nav className="toc" aria-label="Nesta página">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              aria-current={active === heading.id ? 'true' : undefined}
              onClick={(event) => {
                // Evita que o link mude a rota: só faz scroll até à secção
                event.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <a className="brand" href="#/" aria-label={`${portfolio.name}, página inicial`}>
        <img className="brand-photo" src={portfolio.photo} alt="" width="40" height="40" />
        {portfolio.name}
        <span className="role-rotation">
          <span className="sr-only">{portfolio.roles.join(' e ')}</span>
          <span className="role-rotation-item" aria-hidden="true">{roleA}</span>
          <span className="role-rotation-item" aria-hidden="true">{roleB}</span>
        </span>
      </a>

      <ThemeToggle />

      <nav className="nav" aria-label="Menu principal">
        {navItems.map((item) => (
          <a key={item.id} href={item.href} aria-current={current === item.id ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
