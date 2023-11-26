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

const DetailedEvent = () => {
  const { id } = useParams()
  console.log(id)
  return (
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
            <Title>
              Walkthrough of .NET 8.0 features.
              <br /> Guide to become gigachad.
            </Title>
            <SubTitle>
              All you need to get started in web design is your desire. In the final of the online
              web design course, you will have several projects for the first portfolio and choose a
              vector for further development.
            </SubTitle>
          </BackgroundContainer>
        </Container>
      </DetailedImgContainer>
      <EventContent />
    </>
  )
}

export { DetailedEvent }
