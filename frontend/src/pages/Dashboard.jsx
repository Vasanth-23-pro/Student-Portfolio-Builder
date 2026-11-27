import {
  Award,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FolderKanban,
} from 'lucide-react'
import QuickActions from '../components/dashboard/QuickActions.jsx'
import RecentActivity from '../components/dashboard/RecentActivity.jsx'
import StatCard from '../components/dashboard/StatCard.jsx'

const summary = [
  {
    label: 'Portfolio completion',
    value: '72%',
    detail: 'Sample progress across sections',
    Icon: ChartNoAxesCombined,
    progress: 72,
  },
  { label: 'Projects', value: '4', detail: 'Sample portfolio data', Icon: FolderKanban },
  { label: 'Skills', value: '8', detail: 'Sample portfolio data', Icon: BriefcaseBusiness },
  { label: 'Achievements', value: '3', detail: 'Sample portfolio data', Icon: Award },
]

const recentActivity = [
  {
    title: 'Profile introduction added',
    section: 'Personal Information',
    time: '2 hours ago',
    Icon: BriefcaseBusiness,
  },
  {
    title: 'Campus Connect project updated',
    section: 'Projects',
    time: 'Yesterday',
    Icon: FolderKanban,
  },
  {
    title: 'New skills added',
    section: 'Skills',
    time: '2 days ago',
    Icon: ChartNoAxesCombined,
  },
  {
    title: 'Minimal template selected',
    section: 'Templates',
    time: '3 days ago',
    Icon: Award,
  },
]

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-welcome">
        <div>
          <p className="dashboard-welcome__eyebrow">Workspace overview</p>
          <h2>Welcome back, Alex <span aria-hidden="true">✦</span></h2>
          <p>Here’s a snapshot of your portfolio progress and recent activity.</p>
        </div>
        <span className="dashboard-sample-badge">Sample data</span>
      </div>
      <div className="dashboard-stats">
        {summary.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="dashboard-content-grid">
        <RecentActivity items={recentActivity} />
        <QuickActions />
      </div>
    </section>
  )
}

export default Dashboard
