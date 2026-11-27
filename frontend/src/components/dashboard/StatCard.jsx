import Card from '../common/Card.jsx'

function StatCard({ label, value, detail, Icon, progress }) {
  return (
    <Card as="article" className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        {Icon && (
          <span className="stat-card__icon" aria-hidden="true">
            <Icon size={19} />
          </span>
        )}
      </div>
      <strong className="stat-card__value">{value}</strong>
      {typeof progress === 'number' && (
        <progress
          aria-label={`${label}: ${progress}%`}
          className="stat-card__progress"
          max="100"
          value={progress}
        />
      )}
      {detail && <p className="stat-card__detail">{detail}</p>}
    </Card>
  )
}

export default StatCard
