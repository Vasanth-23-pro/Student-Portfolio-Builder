import { useEffect } from 'react'
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Check,
  Eye,
  FileDown,
  LayoutTemplate,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import Card from '../components/common/Card.jsx'

const features = [
  {
    Icon: WandSparkles,
    title: 'Easy portfolio creation',
    description: 'Bring your story together with a clear, student-friendly starting point.',
  },
  {
    Icon: LayoutTemplate,
    title: 'Multiple templates',
    description: 'Find a polished visual style that feels right for your goals.',
  },
  {
    Icon: BriefcaseBusiness,
    title: 'Skills and project presentation',
    description: 'Give your strengths and hands-on work the context they deserve.',
  },
  {
    Icon: Eye,
    title: 'Live preview',
    description: 'See how your portfolio comes together as you shape your story.',
  },
  {
    Icon: FileDown,
    title: 'PDF export',
    description: 'Get your work ready to share in a convenient, portable format.',
  },
]

const templates = [
  { name: 'The Classic', type: 'Professional', style: 'classic', initials: 'AC' },
  { name: 'The Minimal', type: 'Clean & focused', style: 'minimal', initials: 'JM' },
  { name: 'The Creative', type: 'Bold & expressive', style: 'creative', initials: 'SK' },
]

function PortfolioMockup() {
  return (
    <div
      aria-label="Example student portfolio preview"
      className="landing-visual"
      role="img"
    >
      <div className="landing-visual__glow" aria-hidden="true" />
      <Card className="portfolio-mockup">
        <div className="portfolio-mockup__topbar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>alexmorgan.portfolio</p>
          <div className="portfolio-mockup__topbar-badge">
            <Check size={12} />
            Preview
          </div>
        </div>
        <div className="portfolio-mockup__body">
          <aside className="portfolio-mockup__profile">
            <div className="portfolio-mockup__avatar">AM</div>
            <strong>Alex Morgan</strong>
            <span>Computer Science Student</span>
            <div className="portfolio-mockup__socials">
              <i />
              <i />
              <i />
            </div>
          </aside>
          <div className="portfolio-mockup__content">
            <span className="portfolio-mockup__eyebrow">HELLO, I'M ALEX</span>
            <h2>Curious mind.<br />Thoughtful builder.</h2>
            <p>I turn ideas into useful digital experiences.</p>
            <div className="portfolio-mockup__skills">
              <span>React</span>
              <span>UI Design</span>
              <span>Python</span>
            </div>
            <div className="portfolio-mockup__project">
              <div className="portfolio-mockup__project-art">
                <span />
                <span />
                <span />
              </div>
              <div>
                <small>FEATURED PROJECT</small>
                <strong>Campus Connect</strong>
              </div>
              <ArrowRight aria-hidden="true" size={16} />
            </div>
          </div>
        </div>
      </Card>
      <div className="landing-visual__note">
        <span className="landing-visual__note-icon"><Award size={17} /></span>
        <span><strong>All your best work</strong><small>Beautifully in one place</small></span>
      </div>
      <div className="landing-visual__sparkle" aria-hidden="true">
        <Sparkles size={26} />
      </div>
    </div>
  )
}

function TemplateArtwork({ style, initials }) {
  return (
    <div className={`template-art template-art--${style}`} aria-hidden="true">
      <div className="template-art__bar"><i /><i /><i /></div>
      <div className="template-art__layout">
        <div className="template-art__side">
          <span className="template-art__avatar">{initials}</span>
          <i className="template-art__line template-art__line--short" />
          <i className="template-art__line" />
          <i className="template-art__line template-art__line--tiny" />
        </div>
        <div className="template-art__main">
          <i className="template-art__line template-art__line--heading" />
          <i className="template-art__line template-art__line--long" />
          <div className="template-art__tiles"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <div className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="landing-hero__copy">
          <span className="landing-eyebrow">
            <Sparkles aria-hidden="true" size={15} />
            Your next opportunity starts with your story
          </span>
          <h1 id="landing-title">
            Build Your Professional <span>Student Portfolio</span>
          </h1>
          <p>
            Bring your education, skills, and projects together in one polished
            portfolio designed to help you show the world what you can do.
          </p>
          <div className="landing-hero__actions">
            <Button
              endIcon={<ArrowRight size={17} />}
              size="large"
              to="/register"
            >
              Get Started
            </Button>
            <Button
              startIcon={<LayoutTemplate size={17} />}
              size="large"
              to="#templates"
              variant="secondary"
            >
              Explore Templates
            </Button>
          </div>
          <div className="landing-hero__trust">
            <span className="landing-hero__avatars" aria-hidden="true">
              <i>A</i><i>J</i><i>M</i><i>+</i>
            </span>
            <span>Made for students ready to stand out</span>
          </div>
        </div>
        <PortfolioMockup />
      </section>

      <section className="landing-section landing-features" id="features">
        <div className="landing-section__heading">
          <span className="landing-eyebrow">Everything you need to get started</span>
          <h2>A stronger way to show what you can do.</h2>
          <p>
            Thoughtful tools to help turn your learning and experiences into a
            story worth sharing.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ Icon, title, description }, index) => (
            <Card className={`feature-card${index === 0 ? ' feature-card--featured' : ''}`} key={title}>
              <span className="feature-card__icon"><Icon aria-hidden="true" size={21} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="landing-section landing-templates" id="templates">
        <div className="landing-section__heading landing-section__heading--row">
          <div>
            <span className="landing-eyebrow">A style for every story</span>
            <h2>Start with a template you love.</h2>
            <p>Explore polished layouts designed to put your work in the spotlight.</p>
          </div>
          <Button
            endIcon={<ArrowRight size={16} />}
            to="/register"
            variant="ghost"
          >
            Browse all templates
          </Button>
        </div>
        <div className="template-grid">
          {templates.map((template, index) => (
            <Card as="article" className="template-card" key={template.name}>
              <TemplateArtwork style={template.style} initials={template.initials} />
              <div className="template-card__details">
                <div>
                  <h3>{template.name}</h3>
                  <p>{template.type}</p>
                </div>
                <span className="template-card__number">0{index + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="landing-about" id="about">
        <div className="landing-about__copy">
          <span className="landing-eyebrow">Made for your next step</span>
          <h2>Your experience is more than a resume.</h2>
          <p>
            Whether you are applying for an internship, building connections, or
            reflecting on how far you have come, your portfolio gives your work
            room to tell its story.
          </p>
        </div>
        <div className="landing-about__points">
          <p><span><Check size={16} /></span> Put projects and skills in context</p>
          <p><span><Check size={16} /></span> Give your achievements a home</p>
          <p><span><Check size={16} /></span> Share a confident, polished first impression</p>
        </div>
      </section>

      <section className="landing-cta" id="get-started">
        <div>
          <span className="landing-eyebrow">Your story is worth sharing</span>
          <h2>Ready to make your work stand out?</h2>
          <p>Start shaping a portfolio that grows with you.</p>
        </div>
        <Button endIcon={<ArrowRight size={17} />} size="large" to="/register">
          Get Started
        </Button>
      </section>
    </div>
  )
}

export default Home
