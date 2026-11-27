import { Link, Outlet } from 'react-router-dom'
import ThemeToggle from '../components/common/ThemeToggle.jsx'
import { ROUTES } from '../utils/routes.js'

function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <Link className="brand" to={ROUTES.home}>
          <span className="brand__mark" aria-hidden="true">S</span>
          <span>folio<span className="brand__accent">craft</span></span>
        </Link>
        <nav className="public-header__actions" aria-label="Main navigation">
          <Link className="text-link" to={ROUTES.login}>Log in</Link>
          <Link className="button button--small" to={ROUTES.register}>Get started</Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="public-main">
        <Outlet />
      </main>
    </div>
  )
}

export default PublicLayout
