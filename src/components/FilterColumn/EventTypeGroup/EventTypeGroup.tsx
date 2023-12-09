import { ChangeEvent } from 'react'
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Skeleton
} from '@mui/material'
import { useGetEventTypesQuery } from 'services/filter.api.ts'
import { useAppDispatch } from 'hooks/redux.ts'
import { setEventTypeId } from 'store/reducers/filter.slice.ts'

const EventTypeGroup = () => {
  const { data, isLoading } = useGetEventTypesQuery()
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEventTypeId(Number(event.target.value)))
  }

  return (
    <FormControl>
      <FormLabel id='eventType'>Format</FormLabel>
      <RadioGroup aria-labelledby='eventType' name='eventType' onChange={handleChange}>
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

export { EventTypeGroup }
