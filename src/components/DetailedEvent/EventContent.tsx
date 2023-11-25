import { Container, Stack } from '@mui/material'
import styled from '@emotion/styled'
import { InstructorMiniInfo } from '../InstructorMiniInfo/InstructorMiniInfo.tsx'
import { EventApplication } from '../Forms/EventApplication/EventApplication.tsx'

const EventContent = () => {
  return (
    <Container sx={{ mt: '48px', mb: '70px' }}>
      <ContentContainer>
        <Stack gap={8}>
          <Stack gap={3}>
            <Heading>About</Heading>
            <TextContent>
              A practical web design course for beginners without experience who want to try
              themselves in a new profession. Students taking the Web Design Beginning course: — get
              to know Figma; — get concepts about standard grids, navigation, forms, compositions; —
              learn the rules of font selection; — acquire skills to search for ideas and
              references; — study graphic techniques, masks, icons.
            </TextContent>
          </Stack>
          <Stack gap={3}>
            <Heading>Instructor</Heading>
            <Stack gap={2}>
              <InstructorMiniInfo name='Yurii Kleban' job='Software Developer & Data Scientist' />
              <InstructorMiniInfo name='Yurii Kleban' job='Software Developer & Data Scientist' />
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Heading>Program</Heading>
            <TextContent>
              A practical web design course for beginners without experience who want to try
              themselves in a new profession. Students taking the Web Design Beginning course: — get
              to know Figma; — get concepts about standard grids, navigation, forms, compositions; —
              learn the rules of font selection; — acquire skills to search for ideas and
              references; — study graphic techniques, masks, icons.
            </TextContent>
          </Stack>
          <Stack gap={3}>
            <Heading>Application</Heading>
            <EventApplication />
          </Stack>
        </Stack>
      </ContentContainer>
    </Container>
  )
}

export { EventContent }

const Heading = styled.h5`
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
  font-weight: 500;
  line-height: 133.4%;
  margin: 0;
`
const TextContent = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
`
const ContentContainer = styled.div`
  max-width: 605px;
`
