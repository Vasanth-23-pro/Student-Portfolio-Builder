import { Outlet } from 'react-router-dom'
import Footer from '../components/navigation/Footer.jsx'
import Navbar from '../components/navigation/Navbar.jsx'

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
