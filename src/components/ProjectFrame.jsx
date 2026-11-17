// Mostra a captura dentro de uma moldura: janela de browser para web, telemóvel para mobile.
export function ProjectFrame({ project }) {
  if (!project.image) {
    return <span className="frame-placeholder">{project.title}</span>
  }

  if (project.mobile) {
    return (
      <div className="frame frame-phone">
        <img src={project.image} alt="" loading="lazy" />
      </div>
    )
  }

  return (
    <div className="frame frame-browser">
      <div className="frame-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="frame-screen">
        <img src={project.image} alt="" loading="lazy" />
      </div>
    </div>
  )
}
