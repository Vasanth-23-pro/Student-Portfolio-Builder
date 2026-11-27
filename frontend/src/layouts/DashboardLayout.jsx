import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx'
import Sidebar from '../components/navigation/Sidebar.jsx'
import { WORKSPACE_NAVIGATION } from '../utils/routes.js'

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const menuToggleRef = useRef(null)
  const { pathname } = useLocation()
  const activeSection = WORKSPACE_NAVIGATION.find(({ path }) => path === pathname)

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)

    if (menuToggleRef.current?.getClientRects().length) {
      menuToggleRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!isSidebarOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeSidebar()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeSidebar, isSidebarOpen])

  return (
    <div className={`dashboard-layout${isSidebarOpen ? ' is-sidebar-open' : ''}`}>
      <div className="dashboard-layout__main">
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          menuToggleRef={menuToggleRef}
          onMenuClick={() => (isSidebarOpen ? closeSidebar() : setIsSidebarOpen(true))}
          title={activeSection?.label || 'Dashboard'}
        />
      </div>
      <Sidebar isOpen={isSidebarOpen} onNavigate={closeSidebar} />
      <button
        aria-label="Close dashboard navigation"
        className="dashboard-layout__overlay"
        onClick={closeSidebar}
        tabIndex={isSidebarOpen ? 0 : -1}
        type="button"
      />
      <main className="dashboard-layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
