import { IconButton } from '@mui/material'
import {
  CardTitle,
  CardSubTitle,
  CardContent,
  SimpleCardContainer,
  LinkWrapper
} from './EventCard.styles.ts'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IEvent } from 'types/event'
import { formatDate } from 'utils/formatDate.ts'

const SimpleEventCard = ({ id, title, creator: { fullName }, startTime, startDate }: IEvent) => {
  return (
    <LinkWrapper to={`event/${id}`} relative='path'>
      <SimpleCardContainer>
        <CardContent>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardSubTitle>
              {fullName} • {formatDate(startDate)} • {startTime.slice(0, -3)}
            </CardSubTitle>
          </div>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardContent>
      </SimpleCardContainer>
    </LinkWrapper>
  )
}

export { SimpleEventCard }
