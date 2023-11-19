import './SignForm.styles.scss'
import { Box, Button, Stack } from '@mui/material'
import MaterialLink from '@mui/material/Link'
import GoogleIcon from '@mui/icons-material/Google'
import { useForm } from 'react-hook-form'
import { RegistrationType } from '../../types/RegistrationType.ts'
import { CustomInput } from '../CustomInput/CustomInput.tsx'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<RegistrationType>({
    defaultValues: { email: '', password: '' }
  })
  const navigate = useNavigate()
  const SignUp = async (data: RegistrationType) => {
    console.log(data)
    navigate('interests')
  }

  return (
    <form onSubmit={handleSubmit(SignUp)}>
      <Box sx={{ padding: '16px' }}>
        <div className='form-container'>
          <div className='text-container'>
            <div className='form-container-title'>Register account</div>
            <div className='form-container-subtext'>Get started for free</div>
          </div>
          <Button fullWidth variant='contained' startIcon={<GoogleIcon />}>
            register with google
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
            register with email
          </Button>
          <Stack direction='row' justifyContent='space-between'>
            <MaterialLink>Forgot password?</MaterialLink>
            <MaterialLink>Create account</MaterialLink>
          </Stack>
        </div>
      </Box>
    </form>
  )
}

export { SignUpForm }
