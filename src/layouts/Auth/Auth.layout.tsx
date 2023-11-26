import { Outlet, useLocation } from 'react-router-dom'
import './Auth.styles.scss'

const AuthLayout = () => {
  const { pathname } = useLocation()
  const currentText = pathname === '/auth/register'

  return (
    <div className='app-container'>
      <div className='sign-up-text'>
        {currentText ? (
          <div>
            Welcome to <br /> the Jet Study <br /> Platform
          </div>
        ) : (
          <div>
            Tell us about <br /> your <br /> interests
          </div>
        )}
      </div>
      <div className='form-container-main'>
        <Outlet />
      </div>
    </div>
  )
}

export { AuthLayout }
