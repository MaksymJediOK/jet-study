import { CustomInput } from '../../CustomInput/CustomInput.tsx'
import { useForm } from 'react-hook-form'
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import styled from '@emotion/styled'
import { useAppDispatch } from 'hooks/redux.ts'
import { setDateFilter, setSearch } from 'store/reducers/filter.slice.ts'
const SearchBlock = () => {
  const { control, handleSubmit } = useForm<{ search: string }>({
    defaultValues: { search: '' }
  })
  const dispatch = useAppDispatch()
  const SearchEvents = (data: { search: string }) => {
    dispatch(setSearch(data.search))
  }
  const handleDateChange = (event: SelectChangeEvent) => {
    dispatch(setDateFilter(event.target.value))
  }

  return (
    <SearchContainer onSubmit={handleSubmit(SearchEvents)}>
      <CustomInput name='search' type='text' label='Search' control={control} />
      <Select onChange={handleDateChange} defaultValue='Year' fullWidth>
        <MenuItem value='Months'>This month</MenuItem>
        <MenuItem value='Year'>This year</MenuItem>
        <MenuItem value='Week'>This day</MenuItem>
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
