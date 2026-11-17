import './App.css'
import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ProjectPage } from './components/ProjectPage'
import { getProjectHeadings } from './lib/projectSections'
import { Journey } from './components/Journey'
import { portfolio } from './data/portfolioData'

// Links antigos com # (ex. /#/projectos/tivacv) passam para o endereço limpo
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}

// Rotas pelo endereço: /, /projectos, /projectos/tivacv, /percurso
// (o vercel.json manda todos os endereços para o index.html)
function parseRoute() {
  const parts = window.location.pathname.split('/').filter(Boolean)
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

    // Links internos (href="/...") mudam de página sem recarregar o site
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target.closest('a[href^="/"]')
      if (!link || link.target || link.hasAttribute('download')) return
      event.preventDefault()
      if (link.getAttribute('href') !== window.location.pathname) {
        window.history.pushState(null, '', link.getAttribute('href'))
      }
      onChange()
    }

    window.addEventListener('popstate', onChange)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onChange)
      document.removeEventListener('click', onClick)
    }
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
