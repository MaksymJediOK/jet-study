import { Container, ListItemButton, Stack } from '@mui/material'
import { InstructorMiniInfo } from '../InstructorMiniInfo/InstructorMiniInfo.tsx'
import { EventApplication } from '../Forms/EventApplication/EventApplication.tsx'
import { Link as ScrollLink } from 'react-scroll'
import { EventInfo } from 'components/DetailedEvent/EventInfo.tsx'
import {
  ContentContainer,
  Heading,
  TextContent
} from './DetailedEvent.styles.ts'

const EventContent = () => {
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
              <TextContent>
                A practical web design course for beginners without experience who want to try
                themselves in a new profession. Students taking the Web Design Beginning course: —
                get to know Figma; — get concepts about standard grids, navigation, forms,
                compositions; — learn the rules of font selection; — acquire skills to search for
                ideas and references; — study graphic techniques, masks, icons.
              </TextContent>
            </Stack>
          </ContentContainer>
          <EventInfo />
        </Stack>
      </Container>

      <Container sx={{ mb: '70px' }}>
        <ContentContainer>
          <Stack gap={8}>
            <Stack gap={3}>
              <Heading name='Instructor'>Instructor</Heading>
              <Stack gap={2}>
                <InstructorMiniInfo name='Yurii Kleban' job='Software Developer & Data Scientist' />
                <InstructorMiniInfo name='Yurii Kleban' job='Software Developer & Data Scientist' />
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Heading name='Program'>Program</Heading>
              <TextContent>
                A practical web design course for beginners without experience who want to try
                themselves in a new profession. Students taking the Web Design Beginning course: —
                get to know Figma; — get concepts about standard grids, navigation, forms,
                compositions; — learn the rules of font selection; — acquire skills to search for
                ideas and references; — study graphic techniques, masks, icons.
              </TextContent>
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
