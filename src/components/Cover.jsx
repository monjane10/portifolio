// Capa do projecto.
// - `cover`: imagem de capa já desenhada (ex. 1200×1000), mostrada sem moldura.
// - `image`: captura de ecrã, mostrada sobre um fundo neutro.
export function Cover({ project, alt = '' }) {
  if (project.cover) {
    return (
      <div className="cover-full">
        <img src={project.cover} alt={alt} loading="lazy" />
      </div>
    )
  }

  if (!project.image) {
    return <div className="cover cover-empty">{project.title}</div>
  }

  return <Shot src={project.image} alt={alt} mobile={project.mobile} />
}

// Captura sobre fundo neutro, como uma fotografia de produto
export function Shot({ src, alt = '', mobile = false }) {
  return (
    <div className={`cover${mobile ? ' cover-mobile' : ''}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

// Imagem dentro do artigo, com legenda opcional.
// `frame: false` mostra a imagem sem o fundo neutro (útil para imagens já compostas).
export function Figure({ src, alt = '', caption, mobile = false, frame = true }) {
  return (
    <figure className="article-screenshot">
      {frame ? (
        <Shot src={src} alt={alt} mobile={mobile} />
      ) : (
        <div className="cover-full">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
