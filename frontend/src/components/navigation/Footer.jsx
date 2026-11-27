import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer__main">
        <div className="landing-footer__identity">
          <Link className="landing-brand" to="/">
            <span className="landing-brand__icon" aria-hidden="true">
              <GraduationCap size={21} />
            </span>
            <span className="landing-brand__name">
              Student <strong>Portfolio Builder</strong>
            </span>
          </Link>
          <p>Make your learning, skills, and projects easy to share.</p>
        </div>
        <nav className="landing-footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#templates">Templates</Link>
          <Link to="/#about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </nav>
      </div>
      <div className="landing-footer__bottom">
        <p>© {currentYear} Student Portfolio Builder. All rights reserved.</p>
        <p>Built for students taking their next step.</p>
      </div>
    </footer>
  )
}

export default Footer
