import { CardMedia, IconButton } from '@mui/material'
import { CardContainer, CardTitle, CardSubTitle, CardContent } from './EventCard.styles.ts'
import FavoriteIcon from '@mui/icons-material/Favorite'

const EventCard = () => {
  return (
    <CardContainer>
      <CardMedia
        sx={{ height: 200, borderRadius: '4px 4px 0 0' }}
        image='https://img.aniwave.to/i/cache/images/c/c2/c2c8b3ae50a1b5e71d792ce9cff52431.jpg'
        title='green iguana'
      />
      <CardContent>
        <div>
          <CardTitle>Walkthrough of .NET 8.0 features</CardTitle>
          <CardSubTitle>Yurii Kleban • 4 Feb 2023 • 19:00</CardSubTitle>
        </div>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </CardContainer>
  )
}

export { EventCard }
