import { useState } from 'react'

export function Courses({ courses = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = courses[activeIndex] || {}

  return (
    <div className="courses-section">
      <div className="courses-grid">
        <aside className="courses-list-wrap">
          <h4 className="courses-heading">COURSES</h4>
          <ul className="courses-list" role="list">
            {courses.map((c, i) => (
              <li key={`${c.title}-${c.period}`}>
                <button
                  type="button"
                  className={`course-item ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={i === activeIndex}
                >
                  <div className="course-item-title">{c.title}</div>
                  <div className="course-item-company">{c.company}</div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="courses-divider" aria-hidden="true">
          <span className="divider-rail">
            <span className="divider-thumb" />
          </span>
        </div>

        <div className="course-details">
          <div className="course-details-head">
            <h3>{active.title}</h3>
            {active.company ? <p className="course-company">{active.company}</p> : null}
          </div>
          <p className="course-period">{active.period}</p>
          <p className="course-description">{active.description}</p>
          {active.certificateUrl ? (
            <div className="course-actions">
              <a className="course-certificate" href={active.certificateUrl} target="_blank" rel="noreferrer">
                See Certificate
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Courses
