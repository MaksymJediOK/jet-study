import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import { CustomInput } from '../../CustomInput/CustomInput.tsx'
import { Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validation.schema.ts'

interface FormType {
  name: string
  email: string
  phoneNumber?: string
  discount?: string
}

const EventApplication = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>({
    defaultValues: { name: '', email: '', phoneNumber: '', discount: '' },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  })
  const eventRegister = (data: FormType) => {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(eventRegister)}>
      <CustomInput
        name='name'
        type='text'
        label='Full Name'
        control={control}
        error={errors?.name?.message}
      />
      <CustomInput
        name='email'
        type='text'
        label='Email'
        control={control}
        error={errors?.email?.message}
      />
      <CustomInput
        name='phoneNumber'
        type='text'
        label='Phone number'
        control={control}
        error={errors?.phoneNumber?.message}
      />
      <CustomInput
        name='discount'
        type='text'
        label='Discount Code'
        control={control}
        error={errors?.discount?.message}
      />
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
