import { ThemeProvider } from './components/common/ThemeProvider.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
