import { useEffect, useState } from 'react'

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    if (isDark) document.documentElement.dataset.theme = 'dark'
    else delete document.documentElement.dataset.theme
    localStorage.setItem('theme', theme)
  }, [theme, isDark])

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      {/* Círculo meio preenchido: o símbolo clássico de contraste */}
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5Z" fill="currentColor" />
      </svg>
    </button>
  )
}
