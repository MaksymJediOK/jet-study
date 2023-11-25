import { Container, Stack, Typography } from '@mui/material'
import { FilterColumn } from '../components/FilterColumn/FilterColumn.tsx'
import { EventsGrid } from '../components/EventsGrid/EventsGrid.tsx'

const Home = () => {
  return (
    <Container maxWidth='xl' sx={{mt: '46px'}}>
      <Typography component='h4' fontSize={34} letterSpacing='0.25px' lineHeight='123%' sx={{mb: '16px'}}>
        Events
      </Typography>
      <Stack direction="row" gap={3} >
        <FilterColumn />
        <EventsGrid/>
      </Stack>
    </Container>
  )
}

export { Home }