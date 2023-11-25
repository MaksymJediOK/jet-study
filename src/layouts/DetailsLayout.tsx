import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer.tsx'

const DetailsLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export { DetailsLayout }
