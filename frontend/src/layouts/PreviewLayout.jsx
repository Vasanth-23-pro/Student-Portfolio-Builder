import { ArrowLeft } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import ThemeToggle from '../components/common/ThemeToggle.jsx'
import { ROUTES } from '../utils/routes.js'

function PreviewLayout() {
  return (
    <div className="preview-layout">
      <header className="preview-header">
        <Link className="text-link preview-back" to={ROUTES.portfolioTemplates}>
          <ArrowLeft aria-hidden="true" size={18} />
          Back to templates
        </Link>
        <span className="preview-header__label">Portfolio preview</span>
        <ThemeToggle />
      </header>
      <main className="preview-main">
        <Outlet />
      </main>
    </div>
  )
}

export default PreviewLayout
