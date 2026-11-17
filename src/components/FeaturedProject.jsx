import { ProjectFrame } from './ProjectFrame'

const linkLabels = {
  live: 'Ver site',
  code: 'Código',
}

export function FeaturedProject({ project, reverse = false }) {
  const entries = Object.entries(project.links ?? {})
  const primaryHref = project.links?.live ?? project.links?.code
  const mediaClassName = `feature-media${project.mobile ? ' feature-media-mobile' : ''}`

  return (
    <article className={`feature${reverse ? ' feature-reverse' : ''}`} data-reveal>
      {primaryHref ? (
        <a className={mediaClassName} href={primaryHref} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
          <ProjectFrame project={project} />
        </a>
      ) : (
        <div className={mediaClassName} aria-hidden="true">
          <ProjectFrame project={project} />
        </div>
      )}

      <div className="feature-info">
        <p className="feature-meta">
          <span>{project.tags?.join(' · ')}</span>
          {project.year ? <span>{project.year}</span> : null}
        </p>
        <h3>{project.title}</h3>
        <p className="feature-type">{project.type}</p>
        <p className="feature-description">{project.description}</p>
        {project.stack?.length ? <p className="feature-stack">{project.stack.join(' · ')}</p> : null}
        {entries.length ? (
          <div className="project-links">
            {entries.map(([key, href]) => (
              <a key={key} href={href} target="_blank" rel="noreferrer">
                {linkLabels[key] ?? key}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
