import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  LayoutDashboard,
  PanelsTopLeft,
  UserRound,
  Wrench,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { WORKSPACE_NAVIGATION } from '../../utils/routes.js'

const navigationIcons = [
  LayoutDashboard,
  UserRound,
  GraduationCap,
  Wrench,
  BriefcaseBusiness,
  Award,
  PanelsTopLeft,
]

function WorkspaceNavigation() {
  return (
    <nav className="workspace-nav" aria-label="Portfolio sections">
      {WORKSPACE_NAVIGATION.map(({ label, path }, index) => {
        const Icon = navigationIcons[index]

        return (
          <NavLink
            className={({ isActive }) =>
              `workspace-nav__link${isActive ? ' is-active' : ''}`
            }
            end
            key={path}
            to={path}
          >
            <Icon aria-hidden="true" size={18} />
            <span>{label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default WorkspaceNavigation
