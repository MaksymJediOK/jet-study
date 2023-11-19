import { TextField } from '@mui/material'
import { Controller, FieldValues } from 'react-hook-form'
import { CustomInputProps } from '../../types/Input.type'

const CustomInput = <T extends FieldValues>({
  name,
  label,
  type,
  control
}: CustomInputProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField type={type} label={label} variant='outlined' {...field} fullWidth />
        )}
      />
    </div>
  )
}

export { CustomInput }
