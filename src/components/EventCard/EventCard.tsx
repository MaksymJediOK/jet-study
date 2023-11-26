import { IconButton } from '@mui/material'
import {
  CardContainer,
  CardTitle,
  CardSubTitle,
  CardContent,
  LinkWrapper
} from './EventCard.styles.ts'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IEvent } from 'types/event'
import { formatDate } from 'utils/formatDate.ts'

const EventCard = ({
  id,
  imageSrc,
  title,
  creator: { fullName },
  startTime,
  startDate
}: IEvent) => {
  return (
    <LinkWrapper to={`event/${id}`} relative='path'>
      <CardContainer>
        <img height={200} style={{ borderRadius: '4px 4px 0 0' }} src={`${imageSrc}`} alt={title} />
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
      </CardContainer>
    </LinkWrapper>
  )
}

export { EventCard }
