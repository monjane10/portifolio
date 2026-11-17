export function Section({ id, title, children, wide = false }) {
  return (
    <section className={`section${wide ? ' section-wide' : ''}`} id={id}>
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}
