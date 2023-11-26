import { Container, ListItemButton, Stack } from '@mui/material'
import { InstructorMiniInfo } from '../InstructorMiniInfo/InstructorMiniInfo.tsx'
import { EventApplication } from '../Forms/EventApplication/EventApplication.tsx'
import { Link as ScrollLink } from 'react-scroll'
import { EventInfo, EventInfoProps } from 'components/DetailedEvent/EventInfo.tsx'
import { ContentContainer, Heading, TextContent } from './DetailedEvent.styles.ts'
import { Creator } from 'types/event'

interface EventContentProps {
  about?: string
  program?: string
  lecturers?: Creator[]
  info: EventInfoProps
}

const EventContent = ({ about, program, lecturers, info }: EventContentProps) => {
  console.log(lecturers)
  return (
    <>
      <Container maxWidth='xl' sx={{ mt: '48px', mb: '40px' }}>
        <Stack direction='row' gap={7}>
          <Stack maxWidth='225px'>
            <ScrollLink to='About' smooth={true}>
              <ListItemButton>About</ListItemButton>
            </ScrollLink>
            <ScrollLink to='Instructor' smooth={true}>
              <ListItemButton>Instructor</ListItemButton>
            </ScrollLink>
            <ScrollLink to='Program' smooth={true}>
              <ListItemButton>Program</ListItemButton>
            </ScrollLink>
            <ScrollLink to='Application' smooth={true}>
              <ListItemButton>Application</ListItemButton>
            </ScrollLink>
          </Stack>
          <ContentContainer>
            <Stack gap={3}>
              <Heading name='About'>About</Heading>
              <TextContent>{about}</TextContent>
            </Stack>
          </ContentContainer>
          <EventInfo {...info} />
        </Stack>
      </Container>

      <Container sx={{ mb: '70px' }}>
        <ContentContainer>
          <Stack gap={8}>
            <Stack gap={3}>
              <Heading name='Instructor'>Instructor</Heading>
              <Stack gap={2}>
                {lecturers?.map(({ fullName }, index) => {
                  return (
                    <InstructorMiniInfo
                      name={fullName}
                      job='Software Developer & Data Scientist'
                      key={fullName + index}
                    />
                  )
                })}
                <InstructorMiniInfo name='Yurii Kleban' job='Software Developer & Data Scientist' />
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Heading name='Program'>Program</Heading>
              <TextContent>{program}</TextContent>
            </Stack>
            <Stack gap={3}>
              <Heading name='Application'>Application</Heading>
              <EventApplication />
            </Stack>
          </Stack>
        </ContentContainer>
      </Container>
    </>
  )
}

export { EventContent }
