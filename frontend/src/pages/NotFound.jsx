import { ArrowLeft, CircleHelp } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found-page">
      <span className="auth-card__icon" aria-hidden="true">
        <CircleHelp size={22} />
      </span>
      <p className="eyebrow">404 error</p>
      <h1>We couldn’t find that page</h1>
      <p>The address may be outdated, or the page may have moved.</p>
      <Link className="ui-button ui-button--primary" to="/">
        <ArrowLeft aria-hidden="true" size={17} />
        Back to home
      </Link>
    </section>
  )
}

export default NotFound
