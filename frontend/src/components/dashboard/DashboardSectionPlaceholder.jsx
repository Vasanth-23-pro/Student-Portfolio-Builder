import { ArrowLeft, Construction } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Button from '../common/Button.jsx'
import Card from '../common/Card.jsx'
import { ROUTES, WORKSPACE_NAVIGATION } from '../../utils/routes.js'

function DashboardSectionPlaceholder() {
  const { pathname } = useLocation()
  const section = WORKSPACE_NAVIGATION.find(({ path }) => path === pathname)

  return (
    <section className="dashboard-section-placeholder">
      <Card className="dashboard-section-placeholder__card">
        <span className="dashboard-section-placeholder__icon" aria-hidden="true">
          <Construction size={23} />
        </span>
        <p className="dashboard-welcome__eyebrow">Coming soon</p>
        <h2>{section?.label || 'Workspace section'}</h2>
        <p>
          This section is reserved for the portfolio management pages. It will
          be connected by the portfolio pages team; no editing tools are
          included in this dashboard shell.
        </p>
        <Button
          startIcon={<ArrowLeft aria-hidden="true" size={16} />}
          to={ROUTES.dashboard}
          variant="secondary"
        >
          Back to dashboard
        </Button>
      </Card>
    </section>
  )
}

export default DashboardSectionPlaceholder
