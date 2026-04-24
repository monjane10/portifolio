function getSkillIcon(title) {
  const value = title.toLowerCase()

  if (value.includes('desenvolvimento') || value.includes('frontend')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M8 9L5 12L8 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 9L19 12L16 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 7L10.5 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (value.includes('dados') || value.includes('backend')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <ellipse
          cx="12"
          cy="6.5"
          rx="5.5"
          ry="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6.5 6.5V12C6.5 13.38 8.96 14.5 12 14.5C15.04 14.5 17.5 13.38 17.5 12V6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6.5 12V17.5C6.5 18.88 8.96 20 12 20C15.04 20 17.5 18.88 17.5 17.5V12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (value.includes('automa') || value.includes('integra')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M7.5 14.5C5.57 14.5 4 12.93 4 11C4 9.07 5.57 7.5 7.5 7.5C9.43 7.5 11 9.07 11 11C11 12.93 9.43 14.5 7.5 14.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16.5 20C14.57 20 13 18.43 13 16.5C13 14.57 14.57 13 16.5 13C18.43 13 20 14.57 20 16.5C20 18.43 18.43 20 16.5 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10.2 9.2L14 5.4C15.2 4.2 17.1 4.2 18.3 5.4C19.5 6.6 19.5 8.5 18.3 9.7L14.5 13.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 3L19 7V17L12 21L5 17V7L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 7L19 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SkillGroup({ title, items }) {
  const firstColumnItems = items.slice(0, 6)
  const secondColumnItems = items.slice(6)
  const hasTwoColumns = secondColumnItems.length > 0

  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon" aria-hidden="true">
          {getSkillIcon(title)}
        </span>
        <h3>{title}</h3>
      </div>
      {hasTwoColumns ? (
        <div className="skill-list-columns">
          <ul className="skill-list">
            {firstColumnItems.map((item, index) => (
              <li className="skill-list-item" key={`col-1-${item}-${index}`}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="skill-list">
            {secondColumnItems.map((item, index) => (
              <li className="skill-list-item" key={`col-2-${item}-${index}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="skill-list">
          {items.map((item, index) => (
            <li className="skill-list-item" key={`col-single-${item}-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
