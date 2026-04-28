import { useState } from 'react'

export function Courses({ courses = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = courses[activeIndex] || {}
  const thumbProgress = courses.length > 1 ? activeIndex / (courses.length - 1) : 0
  const companyLabel = active.company?.match(/\(([^)]+)\)$/)?.[1] || active.company

  return (
    <div className="courses-section">
      <div className="courses-grid">
        <aside className="courses-list-wrap">
          <ul className="courses-list" role="list">
            {courses.map((c, i) => (
              <li key={`${c.title}-${c.period}`}>
                <button
                  type="button"
                  className={`course-item ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={i === activeIndex}
                >
                  <span className="course-item-title">{c.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="courses-divider" aria-hidden="true" style={{ '--thumb-progress': thumbProgress }}>
          <span className="divider-rail">
            <span className="divider-thumb" />
          </span>
        </div>

        <div className="course-details">
          <div className="course-details-head">
            <h3>{active.title}</h3>
            {companyLabel ? <p className="course-company">{companyLabel}</p> : null}
          </div>
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
