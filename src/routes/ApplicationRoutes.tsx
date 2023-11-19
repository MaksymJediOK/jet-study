import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layouts/Auth.layout'
import { SignUpForm } from '../components/Forms/SignUpForm'
import { UserInterests } from '../components/Forms/UserInterests/UserInterests.tsx'
import { SignInForm } from '../components/Forms/SignInForm.tsx'
import { Default } from '../layouts/Default.tsx'
import { Home } from '../pages/Home.tsx'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path='auth' element={<AuthLayout />}>
        <Route path='register' element={<SignUpForm />} />
        <Route path='login' element={<SignInForm />} />
        <Route path='register/interests' element={<UserInterests />} />
      </Route>
      <Route path='/' element={<Default />}>
        <Route path='/home' index element={<Home />} />
      </Route>
    </Routes>
  )
}

export { ApplicationRoutes }
