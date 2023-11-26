import { object, string } from 'yup'

export const validationSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email('Incorrect email').required('email is required'),
  phoneNumber: string(),
  discount: string()
})
