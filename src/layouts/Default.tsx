import { Header } from 'components/Header'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

export { Default }