import { Container, Typography } from '@mui/material'
import { FilterColumn } from '../components/FilterColumn/FilterColumn.tsx'

const Home = () => {
  return (
    <Container sx={{mt: '46px'}}>
      <Typography component='h4' fontSize={34} letterSpacing='0.25px' lineHeight='123%' sx={{mb: '16px'}}>
        Events
      </Typography>
      <FilterColumn />
    </Container>
  )
}

export { Home }