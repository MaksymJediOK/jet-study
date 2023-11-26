import { TextField } from '@mui/material'
import { Controller, FieldValues } from 'react-hook-form'
import { CustomInputProps } from 'types/Input.type.ts'

const CustomInput = <T extends FieldValues>({
  name,
  label,
  type,
  control,
  error
}: CustomInputProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            type={type}
            label={label}
            variant='outlined'
            {...field}
            fullWidth
            error={!!error}
            helperText={error || ''}
          />
        )}
      />
    </div>
  )
}

export { CustomInput }
