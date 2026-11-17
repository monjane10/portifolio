import { portfolio } from '../data/portfolioData'

function EntryList({ items }) {
  return (
    <ul className="entries">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="entry">
          <div>
            <p className="entry-title">
              {item.certificateUrl ? (
                <a className="text-link" href={item.certificateUrl} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </p>
            {item.company ? <p className="entry-sub">{item.company}</p> : null}
          </div>
          <p className="entry-period">{item.period}</p>
        </li>
      ))}
    </ul>
  )
}

export function Journey() {
  return (
    <section className="journey" aria-labelledby="percurso-titulo">
      <h1 id="percurso-titulo" className="sr-only">
        Percurso
      </h1>

      <h2>Experiência</h2>
      <EntryList items={portfolio.experience} />

      <h2>Formação</h2>
      <EntryList items={portfolio.education} />

      <h2>Cursos</h2>
      <EntryList items={portfolio.courses} />

      <h2>Competências</h2>
      <ul className="entries">
        {portfolio.skills.map((group) => (
          <li key={group.title} className="entry entry-skills">
            <p className="entry-title">{group.title}</p>
            <p className="entry-sub">{group.items.join(', ')}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
