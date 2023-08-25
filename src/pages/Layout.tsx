
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../utils/ScrollToTop'

const Layout = () => {
  

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout