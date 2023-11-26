import { Stack } from '@mui/material'
import { DateText, InfoTitle, InfoSubTitle } from './DetailedEvent.styles.ts'
import {
  transformTimeFormat,
  calculateDuration,
  transformDateFormat
} from 'utils/calculateDuration.ts'

export interface EventInfoProps {
  eventDate: string
  price: number
  location: string
  startTime: string
  endTime: string
}

const EventInfo = ({ eventDate, location, price, startTime, endTime }: EventInfoProps) => {
  const duration = calculateDuration({ startTime, endTime })
  const start = transformTimeFormat(startTime)
  const date = transformDateFormat(eventDate)
  return (
    <Stack gap={3} minWidth='480px'>
      <InfoTitle>Details</InfoTitle>
      <Stack direction='row' justifyContent='space-between'>
        <DateText>{date}</DateText>
        <DateText>${price}</DateText>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <InfoSubTitle>Online</InfoSubTitle>
        <InfoSubTitle>{location}</InfoSubTitle>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <InfoSubTitle>{duration}</InfoSubTitle>
        <InfoSubTitle>{start} UTC+3</InfoSubTitle>
      </Stack>
    </Stack>
  )
}

export { EventInfo }
