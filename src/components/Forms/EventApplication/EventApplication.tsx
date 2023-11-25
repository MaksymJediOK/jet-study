import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import { CustomInput } from '../../CustomInput/CustomInput.tsx'
import { Button } from '@mui/material'

interface FormType {
  name: string
  email: string
  phoneNumber: string
  discount: string
}

const EventApplication = () => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: { name: '', email: '', phoneNumber: '', discount: '' }
  })
  const eventRegister = (data: FormType) => {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(eventRegister)}>
      <CustomInput name='name' type='text' label='Full Name' control={control} />
      <CustomInput name='email' type='text' label='Email' control={control} />
      <CustomInput name='phoneNumber' type='text' label='Phone number' control={control} />
      <CustomInput name='discount' type='text' label='Discount Code' control={control} />
      <Button size='large' variant='contained' type='submit'>
        apply
      </Button>
    </Form>
  )
}

export { EventApplication }

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 480px;
`
