import './SignForm.styles.scss'
import { Box, Button, Stack } from '@mui/material'
import MaterialLink from '@mui/material/Link'
import GoogleIcon from '@mui/icons-material/Google'
import { useForm } from 'react-hook-form'
import { RegistrationType } from 'types/auth'
import { CustomInput } from 'components/CustomInput/CustomInput.tsx'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from 'services/auth.api.ts'
import { registrationSchema } from 'utils/validators'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUpForm = () => {
  const [register] = useRegisterMutation()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationType>({
    defaultValues: { username: '', password: '', email: '' },
    mode: 'onSubmit',
    resolver: yupResolver(registrationSchema)
  })
  const navigate = useNavigate()
  const SignUp = async (registrationData: RegistrationType) => {
    try {
      await register(registrationData)
        .unwrap()
        .catch((e) => console.log(e))
        .finally(() => navigate('interests'))
    } catch (e) {
      console.log(e)
    }
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
            <CustomInput
              name='username'
              type='text'
              label='Name'
              control={control}
              error={errors.username?.message}
            />
            <CustomInput
              name='email'
              type='text'
              label='Email'
              control={control}
              error={errors.email?.message}
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
