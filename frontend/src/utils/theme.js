const THEME_STORAGE_KEY = 'student-portfolio-theme'

export function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function saveTheme(theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}
