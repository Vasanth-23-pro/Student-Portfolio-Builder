import { ArrowRight, Eye, FolderKanban, PanelsTopLeft, UserRound } from 'lucide-react'
import Button from '../common/Button.jsx'
import Card from '../common/Card.jsx'
import { ROUTES } from '../../utils/routes.js'

const actions = [
  { label: 'Review your profile', to: ROUTES.personalInformation, Icon: UserRound },
  { label: 'View your projects', to: ROUTES.projects, Icon: FolderKanban },
  { label: 'Explore templates', to: ROUTES.portfolioTemplates, Icon: PanelsTopLeft },
  { label: 'Preview portfolio', to: ROUTES.portfolioPreview, Icon: Eye },
]

function QuickActions({ items = actions }) {
  return (
    <Card as="section" className="quick-actions" aria-labelledby="quick-actions-title">
      <div className="dashboard-section-heading">
        <div>
          <p className="dashboard-section-heading__eyebrow">Keep moving</p>
          <h2 id="quick-actions-title">Quick actions</h2>
        </div>
        <span className="dashboard-section-heading__tag">Shortcuts</span>
      </div>
      <div className="quick-actions__list">
        {items.map(({ label, to, Icon }) => (
          <div className="quick-action" key={to}>
            <span className="quick-action__icon" aria-hidden="true">
              <Icon size={18} />
            </span>
            <span className="quick-action__label">{label}</span>
            <Button
              aria-label={label}
              className="quick-action__button"
              endIcon={<ArrowRight aria-hidden="true" size={16} />}
              size="small"
              to={to}
              variant="ghost"
            >
              Open
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default QuickActions
