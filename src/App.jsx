import './App.css'
import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ProjectPage } from './components/ProjectPage'
import { getProjectHeadings } from './lib/projectSections'
import { Journey } from './components/Journey'
import { portfolio } from './data/portfolioData'

// Rotas por hash (#/projectos/tivacv) para funcionar em qualquer alojamento estático
function parseRoute() {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  const [page = '', slug] = parts
  if (page === 'projectos' && slug) {
    const project = portfolio.projects.find((item) => item.slug === slug)
    return project ? { page: 'projecto', project } : { page: 'projectos' }
  }
  if (page === 'projectos' || page === 'percurso') return { page }
  return { page: 'sobre' }
}

const titles = {
  sobre: `${portfolio.name} · ${portfolio.role}`,
  projectos: `Projectos · ${portfolio.name}`,
  percurso: `Percurso · ${portfolio.name}`,
}

function App() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const onChange = () => {
      setRoute(parseRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    document.title = route.project ? `${route.project.title} · ${portfolio.name}` : titles[route.page]
  }, [route])

  const isArticle = route.page === 'projecto'

  return (
    <div className={`layout${isArticle ? ' layout-article' : ''}`}>
      <a className="skip-link" href="#conteudo" onClick={(event) => {
        event.preventDefault()
        document.getElementById('conteudo')?.focus()
      }}>
        Saltar para o conteúdo
      </a>

      <Sidebar
        current={isArticle ? 'projectos' : route.page}
        headings={isArticle ? getProjectHeadings(route.project) : null}
      />

      <main id="conteudo" className="content" tabIndex={-1}>
        {route.page === 'sobre' && <About />}
        {route.page === 'projectos' && <Projects projects={portfolio.projects} />}
        {route.page === 'percurso' && <Journey />}
        {isArticle && <ProjectPage key={route.project.slug} project={route.project} />}
      </main>
    </div>
  )
}

export default App
