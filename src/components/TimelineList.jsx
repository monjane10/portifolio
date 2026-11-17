const ignoredWords = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'via'])

// Iniciais para o círculo: "Raggio AI" → "RA", "IBM" → "IBM", "Meta, via Coursera" → "ME"
function getInitials(name = '') {
  const words = name
    .split(',')[0]
    .split(/\s+/)
    .filter((word) => word && !ignoredWords.has(word.toLowerCase()))

  if (words.length === 1) {
    const [word] = words
    return word === word.toUpperCase() ? word.slice(0, 3) : word.slice(0, 2).toUpperCase()
  }

  return words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

// Lista ligada por uma linha vertical, ao estilo do LinkedIn.
// Cada item aceita `logo` (imagem), `initials` e `certificateUrl` opcionais.
export function TimelineList({ items = [] }) {
  return (
    <ol className="timeline">
      {items.map((item) => {
        const isCurrent = /actualmente|presente/i.test(item.period)

        return (
          <li className={`timeline-item${isCurrent ? ' is-current' : ''}`} key={`${item.title}-${item.period}`}>
            <span className="timeline-marker" aria-hidden="true">
              {item.logo ? <img src={item.logo} alt="" /> : item.initials ?? getInitials(item.company)}
            </span>
            <div className="timeline-content">
              <p className="row-title">
                {item.certificateUrl ? (
                  <a href={item.certificateUrl} target="_blank" rel="noreferrer">
                    {item.title} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  item.title
                )}
              </p>
              <p className="row-sub">{item.company}</p>
              <p className="timeline-period">{item.period}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
