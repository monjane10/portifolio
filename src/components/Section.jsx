export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  muted = false,
  split = true,
  minimal = false,
}) {
  return (
    <section className={`content-section${muted ? ' content-section-muted' : ''}`} id={id}>
      <div className={`section-shell${split ? ' section-shell-split' : ''}`}>
        <div className="section-heading">
          {minimal ? (
            <span className="section-label">{eyebrow || title}</span>
          ) : (
            <>
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              {title ? <h2>{title}</h2> : null}
              {description ? <p>{description}</p> : null}
            </>
          )}
        </div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  )
}
