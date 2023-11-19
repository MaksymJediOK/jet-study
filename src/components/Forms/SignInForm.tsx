import './SignForm.styles.scss'
import { Box, Button, Stack } from '@mui/material'
import MaterialLink from '@mui/material/Link'
import GoogleIcon from '@mui/icons-material/Google'
import { useForm } from 'react-hook-form'
import { RegistrationType } from '../../types/RegistrationType.ts'
import { CustomInput } from '../CustomInput/CustomInput.tsx'
import { Link, useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const { control, handleSubmit } = useForm<RegistrationType>({
    defaultValues: { email: '', password: '' }
  })
  const navigate = useNavigate()
  const SignIn = async (data: RegistrationType) => {
    console.log(data)
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
            <CustomInput name='email' type='text' label='Email' control={control} />
            <CustomInput name='password' type='text' label='Password' control={control} />
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
