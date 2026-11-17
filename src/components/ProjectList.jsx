import { useRef, useState } from 'react'

// Lista compacta. Em ecrãs com rato, uma pré-visualização da captura segue o cursor.
export function ProjectList({ projects }) {
  const previewRef = useRef(null)
  // Guarda a última imagem para o fade de saída não ficar vazio
  const [preview, setPreview] = useState(null)
  const [visible, setVisible] = useState(false)

  const movePreview = (event) => {
    const el = previewRef.current
    if (!el) return
    el.style.transform = `translate(${event.clientX + 28}px, ${event.clientY - 80}px)`
  }

  return (
    <>
      <ul className="project-list">
        {projects.map((project) => {
          const href = project.links?.live ?? project.links?.code
          const Row = href ? 'a' : 'div'
          const rowProps = href ? { href, target: '_blank', rel: 'noreferrer' } : {}

          return (
            <li key={project.title} data-reveal>
              <Row
                className="list-row"
                {...rowProps}
                onMouseEnter={(event) => {
                  movePreview(event)
                  setPreview(project)
                  setVisible(true)
                }}
                onMouseMove={movePreview}
                onMouseLeave={() => setVisible(false)}
              >
                {project.image ? <img className="list-thumb" src={project.image} alt="" loading="lazy" /> : null}
                <span className="list-main">
                  <span className="list-title">{project.title}</span>
                  <span className="list-description">{project.description}</span>
                  {project.stack?.length ? <span className="list-stack">{project.stack.join(' · ')}</span> : null}
                </span>
                <span className="list-type">
                  {project.type}
                  {project.year ? ` · ${project.year}` : ''}
                </span>
                {href ? (
                  <span className="list-arrow" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </Row>
            </li>
          )
        })}
      </ul>

      <div ref={previewRef} className={`list-preview${visible && preview?.image ? ' is-active' : ''}`} aria-hidden="true">
        {preview?.image ? <img src={preview.image} alt="" /> : null}
      </div>
    </>
  )
}
