import { portfolio } from '../data/portfolioData'
import { renderInline } from '../lib/inline'

export function About() {
  return (
    <section className="prose" aria-labelledby="sobre-titulo">
      <h1 id="sobre-titulo" className="sr-only">
        Sobre {portfolio.name}
      </h1>

      {portfolio.about.map((paragraph, index) => (
        <p key={index}>{renderInline(paragraph)}</p>
      ))}
    </section>
  )
}
