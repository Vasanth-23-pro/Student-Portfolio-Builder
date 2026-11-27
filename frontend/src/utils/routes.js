export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  personalInformation: '/personal-information',
  education: '/education',
  skills: '/skills',
  projects: '/projects',
  achievements: '/achievements',
  portfolioTemplates: '/portfolio-templates',
  portfolioPreview: '/portfolio-preview',
  settings: '/settings',
}

export const WORKSPACE_NAVIGATION = [
  { label: 'Dashboard', path: ROUTES.dashboard },
  { label: 'Personal Information', path: ROUTES.personalInformation },
  { label: 'Education', path: ROUTES.education },
  { label: 'Skills', path: ROUTES.skills },
  { label: 'Projects', path: ROUTES.projects },
  { label: 'Achievements', path: ROUTES.achievements },
  { label: 'Templates', path: ROUTES.portfolioTemplates },
  { label: 'Portfolio Preview', path: ROUTES.portfolioPreview },
  { label: 'Settings', path: ROUTES.settings },
]
