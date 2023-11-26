import './SignForm.styles.scss'
import { Box, Button, Stack } from '@mui/material'
import MaterialLink from '@mui/material/Link'
import GoogleIcon from '@mui/icons-material/Google'
import { useForm } from 'react-hook-form'
import { CustomInput } from 'components/CustomInput/CustomInput.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from 'utils/validators'
import { LoginType } from 'types/auth'
import { useLoginMutation } from 'services/auth.api.ts'

const SignInForm = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(loginSchema)
  })
  const SignIn = async (loginData: LoginType) => {
    await login(loginData)
      .unwrap()
      .then(({ access_token }) => localStorage.setItem('token', access_token))
    navigate('/home')
  }

  return (
    <form onSubmit={handleSubmit(SignIn)}>
      <Box sx={{ padding: '16px' }}>
        <div className='form-container'>
          <div className='text-container'>
            <div className='form-container-title'>Log In</div>
            <div className='form-container-subtext'>Get started for free</div>
          </div>
          <Button fullWidth variant='contained' startIcon={<GoogleIcon />}>
            Login with google
          </Button>
          <div className='form-container-divider'>or</div>
          <div className='inputs'>
            <CustomInput
              name='username'
              type='text'
              label='Name'
              control={control}
              error={errors.username?.message}
            />
            <CustomInput
              name='password'
              type='text'
              label='Password'
              control={control}
              error={errors.password?.message}
            />
          </div>
          <div className='form-container-policy'>
            By continuing, you agree to the terms of the Public Offer and the Privacy Policy.
          </div>
          <Button sx={{ margin: '16px 0' }} fullWidth variant='outlined' type='submit'>
            Login with email
          </Button>
          <Stack direction='row' justifyContent='space-between'>
            <MaterialLink>Forgot password?</MaterialLink>

            <Link to={'/auth/register'}>Create account</Link>
          </Stack>
        </div>
      </Box>
    </form>
  )
}

export { SignInForm }
