import { LayoutDashboard, Menu, X } from 'lucide-react'
import ThemeToggle from '../common/ThemeToggle.jsx'

function DashboardHeader({
  title = 'Dashboard',
  isSidebarOpen = false,
  menuToggleRef,
  onMenuClick,
}) {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header__actions">
        <span className="dashboard-header__workspace-label">Student workspace</span>
        <ThemeToggle />
      </div>
      <div className="dashboard-header__title">
        <button
          aria-controls="dashboard-sidebar"
          aria-expanded={isSidebarOpen}
          aria-label={isSidebarOpen ? 'Close dashboard navigation' : 'Open dashboard navigation'}
          className="dashboard-header__menu-toggle"
          onClick={onMenuClick}
          ref={menuToggleRef}
          type="button"
        >
          {isSidebarOpen
            ? <X aria-hidden="true" size={20} />
            : <Menu aria-hidden="true" size={20} />}
        </button>
        <LayoutDashboard aria-hidden="true" size={21} />
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default DashboardHeader
