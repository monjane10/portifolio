import { portfolio } from '../data/portfolioData'

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function formatList(items) {
  if (items.length < 2) return items.join('')
  return `${items.slice(0, -1).join(', ')} e ${items.at(-1)}`
}

export function hostOf(url) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

// Secções do artigo. Um projecto pode ter `sections: [{ title, paragraphs }]` nos dados
// para contar mais sobre o problema, as decisões e os resultados.
export function getSections(project) {
  const sections = (project.sections ?? []).map((section) => ({ ...section, id: slugify(section.title) }))
  if (project.stack?.length) sections.push({ id: 'tecnologias', title: portfolio.labels.stackTitle })
  if (project.links?.live || project.links?.code) sections.push({ id: 'ver-o-projecto', title: portfolio.labels.linksTitle })
  return sections
}

const headingsCache = new WeakMap()

export function getProjectHeadings(project) {
  if (!headingsCache.has(project)) {
    headingsCache.set(project, [
      { id: 'artigo-topo', title: `${project.title}, ${project.type}`, depth: 1 },
      ...getSections(project).map(({ id, title }) => ({ id, title, depth: 2 })),
    ])
  }
  return headingsCache.get(project)
}
