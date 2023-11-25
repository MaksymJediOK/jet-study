import { CustomInput } from '../../CustomInput/CustomInput.tsx'
import { useForm } from 'react-hook-form'
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import styled from '@emotion/styled'
const SearchBlock = () => {
  const { control, handleSubmit } = useForm<{ search: string }>({
    defaultValues: { search: '' }
  })
  const handleSearch = (data: { search: string }) => {
    console.log(data)
    console.log(date)
  }
  const [date, setDate] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string)
  }
  return (
    <SearchContainer onSubmit={handleSubmit(handleSearch)}>
      <CustomInput name='search' type='text' label='Search' control={control} />
      <Select value={date} onChange={handleChange} defaultValue='this month' fullWidth>
        <MenuItem value={10}>This month</MenuItem>
        <MenuItem value={20}>This year</MenuItem>
        <MenuItem value={30}>This day</MenuItem>
      </Select>
      <Button type='submit' variant='contained' size='large'>
        search
      </Button>
    </SearchContainer>
  )
}

export { SearchBlock }

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
