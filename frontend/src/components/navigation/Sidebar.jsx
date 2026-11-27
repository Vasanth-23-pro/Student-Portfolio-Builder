import {
  Award,
  Eye,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  PanelsTopLeft,
  Settings,
  UserRound,
  Wrench,
} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES, WORKSPACE_NAVIGATION } from '../../utils/routes.js'

const navigationIcons = {
  [ROUTES.dashboard]: LayoutDashboard,
  [ROUTES.personalInformation]: UserRound,
  [ROUTES.education]: GraduationCap,
  [ROUTES.skills]: Wrench,
  [ROUTES.projects]: FolderKanban,
  [ROUTES.achievements]: Award,
  [ROUTES.portfolioTemplates]: PanelsTopLeft,
  [ROUTES.portfolioPreview]: Eye,
  [ROUTES.settings]: Settings,
}

function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside
      className={`dashboard-sidebar${isOpen ? ' is-open' : ''}`}
      id="dashboard-sidebar"
      aria-label="Dashboard sidebar"
    >
      <Link className="dashboard-sidebar__brand" to={ROUTES.dashboard} onClick={onNavigate}>
        <span className="dashboard-sidebar__brand-icon" aria-hidden="true">
          <GraduationCap size={21} />
        </span>
        <span>Student <strong>Portfolio Builder</strong></span>
      </Link>
      <p className="dashboard-sidebar__label">Workspace</p>
      <nav
        aria-label="Dashboard navigation"
        className="dashboard-sidebar__nav"
      >
        {WORKSPACE_NAVIGATION.map(({ label, path }) => {
          const Icon = navigationIcons[path]

          return (
            <NavLink
              className={({ isActive }) =>
                `dashboard-sidebar__link${isActive ? ' is-active' : ''}`
              }
              end={path === '/dashboard'}
              key={path}
              onClick={onNavigate}
              to={path}
            >
              <Icon aria-hidden="true" size={18} />
              <span>{label}</span>
            </NavLink>
          )
        })}
      </nav>
      <div className="dashboard-sidebar__footer">
        <span className="dashboard-sidebar__avatar" aria-hidden="true">S</span>
        <span><strong>Student workspace</strong><small>Portfolio Builder</small></span>
      </div>
    </aside>
  )
}

export default Sidebar
