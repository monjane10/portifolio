import { Cover, Figure } from './Cover'
import { portfolio } from '../data/portfolioData'
import { formatList, getSections, hostOf } from '../lib/projectSections'
import { renderInline } from '../lib/inline'

export function ProjectPage({ project }) {
  const sections = getSections(project)
  // Compara pelo slug: os objectos podem ser recriados quando o código recarrega
  const index = portfolio.projects.findIndex((item) => item.slug === project.slug)
  const next = portfolio.projects[(index + 1) % portfolio.projects.length]
  // Introdução: vários parágrafos em `intro`, ou a descrição curta
  const intro = project.intro?.length ? project.intro : [project.description]

  return (
    <article className="article">
      <header id="artigo-topo" className="article-header">
        <h1>
          {project.title}, {project.type}
        </h1>
        {project.year ? <p>{project.year}</p> : null}
      </header>

      <div className="project-markdown">
        {intro.map((text, i) => (
          <p key={`intro${i}`}>{renderInline(text, '')}</p>
        ))}

        <figure className="article-screenshot">
          <Cover project={project} alt={`Interface do ${project.title}`} />
          {project.coverCaption ? <figcaption>{project.coverCaption}</figcaption> : null}
        </figure>

        {sections.map((section) => {
          if (section.id === 'tecnologias') {
            return [
              <h2 key="h" id={section.id}>{section.title}</h2>,
              <p key="p">{portfolio.labels.stackIntro} {formatList(project.stack)}.</p>,
            ]
          }

          if (section.id === 'ver-o-projecto') {
            const { live, code } = project.links
            return [
              <h2 key="h" id={section.id}>{section.title}</h2>,
              <p key="p">
                {live ? (
                  <>
                    {portfolio.labels.liveIntro}{' '}
                    <a href={live} target="_blank" rel="noreferrer">
                      {hostOf(live)}
                    </a>
                    .
                  </>
                ) : null}
                {live && code ? ' ' : null}
                {code ? (
                  <>
                    {portfolio.labels.codeIntro}{' '}
                    <a href={code} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    .
                  </>
                ) : null}
              </p>,
            ]
          }

          return [
            <h2 key="h" id={section.id}>{section.title}</h2>,
            ...(section.paragraphs ?? []).map((text, i) => <p key={`p${i}`}>{renderInline(text, '')}</p>),
            ...(section.images ?? []).map((image, i) => <Figure key={`f${i}`} {...image} />),
          ]
        })}
      </div>

      <nav className="article-footer" aria-label="Mais projectos">
        <a href="/projectos">{portfolio.labels.allProjects}</a>
        {next && next.slug !== project.slug ? <a href={`/projectos/${next.slug}`}>{next.title} →</a> : null}
      </nav>
    </article>
  )
}
