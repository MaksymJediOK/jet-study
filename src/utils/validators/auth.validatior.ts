import { object, string } from 'yup'

export const registrationSchema = object().shape({
  username: string().required('Name is required'),
  password: string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{7,}$/, 'Invalid password')
    .min(7, 'At least 5 characters')
    .required('Password is required'),
  email: string().required('email is required').email('invalid email')
})

export const loginSchema =object().shape({
  username: string().required('Name is required'),
  password: string().required('Password is required'),
})