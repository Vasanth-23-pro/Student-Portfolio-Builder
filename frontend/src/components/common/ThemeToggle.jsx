import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeContext.jsx'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const Icon = theme === 'light' ? Moon : Sun

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextTheme} theme`}
    >
      <Icon aria-hidden="true" size={18} />
    </button>
  )
}

export default ThemeToggle
