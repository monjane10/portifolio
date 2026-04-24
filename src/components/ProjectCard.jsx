const projectActions = [
  {
    key: 'live',
    label: 'Visualizar',
    icon: (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M10 14L21 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 3H21V9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 14V18C21 19.66 19.66 21 18 21H6C4.34 21 3 19.66 3 18V6C3 4.34 4.34 3 6 3H10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'Abrir codigo',
    icon: (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M9 19C4 20.5 4 16.5 2 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22V18.13C15.04 17.62 14.97 17.11 14.79 16.63C14.61 16.15 14.32 15.72 13.94 15.37C17.14 15 20.5 13.8 20.5 8.28C20.5 6.87 20 5.51 19.1 4.43C19.55 3.23 19.52 1.91 19 0.73C19 0.73 17.82 0.36 15 2.27C12.71 1.64 10.29 1.64 8 2.27C5.18 0.36 4 0.73 4 0.73C3.48 1.91 3.45 3.23 3.9 4.43C3 5.52 2.5 6.88 2.5 8.28C2.5 13.79 5.86 15 9.06 15.37C8.68 15.72 8.39 16.15 8.21 16.63C8.03 17.11 7.96 17.62 8 18.13V22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'figma',
    label: 'Abrir design',
    icon: (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M9 3H12.5C14.43 3 16 4.57 16 6.5C16 8.43 14.43 10 12.5 10H9V3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 10H12.5C14.43 10 16 11.57 16 13.5C16 15.43 14.43 17 12.5 17H9V10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 17V20.5C9 22.43 7.43 24 5.5 24C3.57 24 2 22.43 2 20.5C2 18.57 3.57 17 5.5 17H9Z"
          transform="translate(0 -3)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 3V10H5.5C3.57 10 2 8.43 2 6.5C2 4.57 3.57 3 5.5 3H9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="16.5"
          cy="13.5"
          r="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
]

function getProjectTheme(project) {
  const value = `${project.title} ${project.type}`.toLowerCase()

  if (value.includes('raggio') || value.includes('intelig')) {
    return 'aurora'
  }

  if (value.includes('beprepared') || value.includes('web')) {
    return 'signal'
  }

  return 'midnight'
}

function getProjectDetails(description = '') {
  const normalizedDescription = description
    .replace(/\s+/g, ' ')
    .replace(/\.([A-Z])/g, '. $1')
    .trim()

  const [bodyText, resultText] = normalizedDescription.split(/Resultado:\s*/i)

  return {
    bodyText: (bodyText ?? '').trim(),
    result: resultText?.trim() ?? '',
  }
}

export function ProjectCard({ project }) {
  const links = project.links ?? {}
  const previewTheme = project.theme ?? getProjectTheme(project)
  const previewClassName = ['project-preview', `project-preview-${previewTheme}`, project.previewClassName]
    .filter(Boolean)
    .join(' ')
  const previewStyle = project.previewStyle ?? {}
  const imageClassName = ['project-preview-image', project.imageClassName].filter(Boolean).join(' ')
  const imageStyle = project.imageStyle ?? {}
  const availableActions = projectActions.filter((action) => links[action.key])
  const { bodyText, result } = getProjectDetails(project.description)

  return (
    <article className="project-card project-card-visual">
      <div className={previewClassName} style={previewStyle}>
        {project.image ? (
          <img
            className={imageClassName}
            style={imageStyle}
            src={project.image}
            alt={`Preview do projeto ${project.title}`}
          />
        ) : (
          <div className="project-preview-placeholder">
            <span className="project-preview-type">{project.type}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <div className="project-card-titleblock">
            <h3>{project.title}</h3>
            {project.highlight ? <p className="project-highlight">{project.highlight}</p> : null}
          </div>

          {availableActions.length ? (
            <div className="project-actions" aria-label={`Links do projeto ${project.title}`}>
              {availableActions.map((action) => {
                const href = links[action.key]
                const isLiveAction = action.key === 'live'

                return (
                  <a
                    key={action.key}
                    className={`project-action${isLiveAction ? ' project-action-visualizar' : ''}`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={action.label}
                    title={action.label}
                  >
                    {isLiveAction ? 'Visualizar' : action.icon}
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>

        <p className="project-description">{bodyText || project.description}</p>

        {result ? (
          <ul className="project-result-list">
            <li><strong>Resultado:</strong> {result}</li>
          </ul>
        ) : null}

        <p className="project-stackline">{project.stack.join(' • ')}</p>
      </div>
    </article>
  )
}
