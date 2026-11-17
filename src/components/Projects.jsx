import { Cover } from './Cover'

export function Projects({ projects }) {
  return (
    <section className="projects" aria-labelledby="projectos-titulo">
      <h1 id="projectos-titulo" className="sr-only">
        Projectos
      </h1>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <article>
              <a className="project-card" href={`/projectos/${project.slug}`}>
                <Cover project={project} />
                <div className="project-meta">
                  <h2>
                    {project.title}, {project.type}
                  </h2>
                  {project.year ? (
                    <p>
                      <span className="sr-only">Ano: </span>
                      {project.year}
                    </p>
                  ) : null}
                </div>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
