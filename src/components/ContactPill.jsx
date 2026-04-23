export function ContactPill({ item }) {
  return (
    <a className="contact-pill" href={item.href}>
      <span>{item.label}</span>
      <strong>{item.value}</strong>
    </a>
  )
}
