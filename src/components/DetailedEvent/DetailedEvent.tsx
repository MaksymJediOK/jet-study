import { useParams } from 'react-router-dom'
import { Container, Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { EventContent } from './EventContent.tsx'
import {
  BackgroundContainer,
  BackLink,
  DetailedImgContainer,
  SubTitle,
  Title
} from './DetailedEvent.styles.ts'
import { useGetEventByIdQuery } from 'services/event.api.ts'
import { EventSkeleton } from 'components/Preloaders/EventSkeleton/EventSkeleton.tsx'
import { EventInfoProps } from 'components/DetailedEvent/EventInfo.tsx'

const DetailedEvent = () => {
  const { id } = useParams()
  const eventId = id ? parseInt(id, 10) : 1
  const { data, isLoading } = useGetEventByIdQuery(eventId)
  const eventInfo: EventInfoProps = {
    eventDate: data?.startDate || '',
    location: data?.location || '',
    price: data?.price || 10,
    startTime: data?.startTime || '',
    endTime: data?.endTime || ''
  }
  return (
    <>
      {isLoading ? (
        <EventSkeleton />
      ) : (
        <>
          <DetailedImgContainer>
            <Container>
              <BackgroundContainer>
                <SubTitle>
                  <BackLink to='/home'>
                    <Stack direction='row' gap={1}>
                      <ArrowBackIosIcon fontSize='small' />
                      <div>Back to library</div>
                    </Stack>
                  </BackLink>
                </SubTitle>
                <Title>{data?.title}</Title>
                <SubTitle>{data?.shortDescription}</SubTitle>
              </BackgroundContainer>
            </Container>
          </DetailedImgContainer>
          <EventContent
            about={data?.longDescription}
            program={data?.targetedAudience}
            lecturers={data?.lecturers}
            info={eventInfo}
          />
        </>
      )}
    </>
  )
}

export { DetailedEvent }
