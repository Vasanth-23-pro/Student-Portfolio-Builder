import { Clock3 } from 'lucide-react'
import Card from '../common/Card.jsx'

function RecentActivity({ items = [] }) {
  return (
    <Card
      as="section"
      className="recent-activity"
      aria-labelledby="recent-activity-title"
    >
      <div className="dashboard-section-heading">
        <div>
          <p className="dashboard-section-heading__eyebrow">What’s been happening</p>
          <h2 id="recent-activity-title">Recent activity</h2>
        </div>
        <span className="dashboard-section-heading__tag">Sample activity</span>
      </div>
      <ol className="recent-activity__list">
        {items.map(({ title, section, time, Icon }) => (
          <li className="recent-activity__item" key={`${title}-${time}`}>
            <span className="recent-activity__icon" aria-hidden="true">
              <Icon size={17} />
            </span>
            <span className="recent-activity__copy">
              <strong>{title}</strong>
              <small>{section}</small>
            </span>
            <span className="recent-activity__time">
              <Clock3 aria-hidden="true" size={13} />
              {time}
            </span>
          </li>
        ))}
      </ol>
    </Card>
  )
}

export default RecentActivity
