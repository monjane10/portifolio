import { TimelineList } from './TimelineList'

export function Courses({ courses = [] }) {
  return <TimelineList items={courses} />
}

export default Courses
