import styled from '@emotion/styled'
import { CardMedia, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const EventCard = () => {
  return (
    <CardContainer>
      <CardMedia
        sx={{ height: 200 }}
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

const CardContainer = styled.div`
  width: 355px;
  height: 272px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`
const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`
const CardTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 500;
  line-height: 95%;
  margin-bottom: 4px;
`
const CardSubTitle = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
`
