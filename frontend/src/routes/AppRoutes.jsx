import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import NotFound from '../pages/NotFound.jsx'
import Register from '../pages/Register.jsx'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import DashboardSectionPlaceholder from '../components/dashboard/DashboardSectionPlaceholder.jsx'
import { ROUTES } from '../utils/routes.js'

const pendingDashboardRoutes = [
  ROUTES.personalInformation,
  ROUTES.education,
  ROUTES.skills,
  ROUTES.projects,
  ROUTES.achievements,
  ROUTES.portfolioTemplates,
  ROUTES.portfolioPreview,
  ROUTES.settings,
]

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.login.slice(1)} element={<Login />} />
          <Route path={ROUTES.register.slice(1)} element={<Register />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.dashboard.slice(1)} element={<Dashboard />} />
          {pendingDashboardRoutes.map((path) => (
            <Route
              element={<DashboardSectionPlaceholder />}
              key={path}
              path={path.slice(1)}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
