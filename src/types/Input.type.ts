import { Control, FieldValues, Path } from 'react-hook-form'

export interface CustomInputProps<T extends FieldValues> {
  name: Path<T>
  type: 'text' | 'email' | 'number' | 'password'
  label: string
  control: Control<T>
  error?: string
}
