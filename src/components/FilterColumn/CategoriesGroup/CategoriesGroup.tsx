import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Skeleton
} from '@mui/material'
import { ChangeEvent } from 'react'
import { useGetCategoriesQuery } from 'services/filter.api.ts'
import { useAppDispatch } from 'hooks/redux.ts'
import { setCategoryId } from 'store/reducers/filter.slice.ts'

const CategoriesGroup = () => {
  const { data, isLoading } = useGetCategoriesQuery()

  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryId(Number(event.target.value)))
  }

  return (
    <FormControl>
      <FormLabel id='categories'>Categories</FormLabel>
      <RadioGroup aria-labelledby='categories' name='categories' onChange={handleChange}>
        {isLoading ? (
          <Skeleton variant='rounded' width={210} height={60} />
        ) : (
          data?.map(({ id, title }) => {
            return <FormControlLabel value={id} control={<Radio />} label={title} key={id} />
          })
        )}
      </RadioGroup>
    </FormControl>
  )
}

export { CategoriesGroup }
