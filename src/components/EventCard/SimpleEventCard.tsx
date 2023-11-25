import { IconButton } from '@mui/material'
import { CardTitle, CardSubTitle, CardContent, SimpleCardContainer } from './EventCard.styles.ts'
import FavoriteIcon from '@mui/icons-material/Favorite'


const SimpleEventCard = () => {
  return (
    <SimpleCardContainer>
      <CardContent>
        <div>
          <CardTitle>Walkthrough of .NET 8.0 features</CardTitle>
          <CardSubTitle>Yurii Kleban • 4 Feb 2023 • 19:00</CardSubTitle>
        </div>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </SimpleCardContainer>
  )
}

export { SimpleEventCard }
