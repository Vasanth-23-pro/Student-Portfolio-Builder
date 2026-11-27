import { Link, Outlet } from 'react-router-dom'
import ThemeToggle from '../components/common/ThemeToggle.jsx'
import WorkspaceNavigation from '../components/navigation/WorkspaceNavigation.jsx'
import { ROUTES } from '../utils/routes.js'

function WorkspaceLayout() {
  return (
    <div className="workspace-layout">
      <header className="workspace-header">
        <Link className="brand" to={ROUTES.home}>
          <span className="brand__mark" aria-hidden="true">S</span>
          <span>folio<span className="brand__accent">craft</span></span>
        </Link>
        <div className="workspace-header__actions">
          <span className="workspace-header__label">Portfolio workspace</span>
          <ThemeToggle />
        </div>
      </header>
      <div className="workspace-body">
        <aside className="workspace-sidebar">
          <p className="sidebar-label">Workspace</p>
          <WorkspaceNavigation />
        </aside>
        <main className="workspace-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default WorkspaceLayout
