export function SkillGroup({ title, items }) {
  return (
    <li className="row">
      <span className="row-meta">{title}</span>
      <p className="row-text">{items.join(', ')}</p>
    </li>
  )
}
