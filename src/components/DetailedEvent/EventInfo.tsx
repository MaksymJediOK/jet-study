import { Stack } from '@mui/material'
import { DateText, InfoTitle, InfoSubTitle } from './DetailedEvent.styles.ts'

const EventInfo = () => {
  return (
    <Stack gap={3} minWidth='480px'>
      <InfoTitle>Details</InfoTitle>
      <Stack direction='row' justifyContent='space-between'>
        <DateText>25.11.2025</DateText>
        <DateText>$16.55</DateText>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <InfoSubTitle>Online</InfoSubTitle>
        <InfoSubTitle>Zoom Meeting</InfoSubTitle>
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <InfoSubTitle>1 hour</InfoSubTitle>
        <InfoSubTitle>19:30 UTC+3</InfoSubTitle>
      </Stack>
    </Stack>
  )
}

export { EventInfo }
