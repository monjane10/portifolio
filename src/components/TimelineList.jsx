export function TimelineList({ items, compact = false, variant = 'timeline' }) {
  const locationIcon = (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 21C15.5 16.8 18 13.9 18 10.5C18 6.91 15.31 4 12 4C8.69 4 6 6.91 6 10.5C6 13.9 8.5 16.8 12 21Z"
        fill="currentColor"
      />
      <circle cx="12" cy="10.5" r="2.2" fill="#ffffff" />
    </svg>
  )

  if (variant === 'editorial') {
    return (
      <div className="experience-list">
        {items.map((item, index) => (
          <article className="experience-item" key={`${item.title}-${item.period}`}>
            <span className="experience-label">{index === 0 ? 'Experiência' : ''}</span>
            <div className="experience-body">
              <h3 className="experience-company">{item.company}</h3>
              <p className="experience-place">
                <span className="experience-place-icon" aria-hidden="true">
                  {locationIcon}
                </span>
                {item.location}
              </p>
              <p className="experience-role">&bull; {item.title}</p>
            </div>
            <p className="experience-period">{item.period}</p>
          </article>
        ))}
      </div>
    )
  }

  if (variant === 'education') {
    return (
      <div className="experience-list">
        {items.map((item, index) => (
          <article className="experience-item" key={`${item.title}-${item.period}`}>
            <span className="experience-label">{index === 0 ? 'Formação' : ''}</span>
            <div className="experience-body">
              <h3 className="experience-company">{item.company}</h3>
              <p className="experience-place">
                <span className="experience-place-icon" aria-hidden="true">
                  {locationIcon}
                </span>
                {item.location}
              </p>
              <p className="experience-role">&bull; {item.title}</p>
            </div>
            <p className="experience-period">{item.period}</p>
          </article>
        ))}
      </div>
    )
  }

  const timelineIcons = [
    (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M12 4L20 8.5L12 13L4 8.5L12 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7 10.5V14.2C7 15.2 9.2 17 12 17C14.8 17 17 15.2 17 14.2V10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M8 7H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 12H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M8 17H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="4"
          width="14"
          height="16"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    (
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
    ),
  ]

  return (
    <div className={`timeline-list${compact ? ' timeline-list-compact' : ''}`}>
      {items.map((item, index) => (
        <div className="timeline-entry" key={`${item.title}-${item.period}`}>
          {!compact ? (
            <div className="timeline-marker-column" aria-hidden="true">
              <span className={`timeline-marker timeline-marker-${(index % 3) + 1}`}>
                {timelineIcons[index % timelineIcons.length]}
              </span>
              {index < items.length - 1 ? <span className="timeline-rail" /> : null}
            </div>
          ) : null}

          <article className="timeline-card">
            <div className="timeline-topline">
              <div className="timeline-head">
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
              </div>
              <p className="timeline-period">{item.period}</p>
            </div>
            <span className="timeline-location">{item.location}</span>
            <p className="timeline-description">{item.description}</p>
          </article>
        </div>
      ))}
    </div>
  )
}


