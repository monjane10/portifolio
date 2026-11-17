// Formatação simples dentro do texto:
//   [texto](endereço)  → link
//   ==texto==          → frase destacada (marcador verde)
//   **texto**          → negrito
const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|==([^=]+)==|\*\*([^*]+)\*\*/g

export function renderInline(text, linkClassName = 'text-link') {
  const parts = []
  let last = 0
  let match

  pattern.lastIndex = 0
  while ((match = pattern.exec(text))) {
    const [whole, label, href, highlight, bold] = match
    if (match.index > last) parts.push(text.slice(last, match.index))
    const key = match.index

    if (label) {
      const external = /^(https?:|mailto:)/.test(href)
      parts.push(
        <a
          key={key}
          className={linkClassName}
          href={href}
          {...(external && !href.startsWith('mailto:') ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {label}
        </a>,
      )
    } else if (highlight) {
      parts.push(<mark key={key}>{highlight}</mark>)
    } else if (bold) {
      parts.push(<strong key={key}>{bold}</strong>)
    }

    last = match.index + whole.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts
}
