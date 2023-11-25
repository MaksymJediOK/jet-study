import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

interface InstructorMiniInfoProps {
  name: string
  job: string
}

const InstructorMiniInfo = ({ name, job }: InstructorMiniInfoProps) => {
  return (
    <Stack gap={1}>
      <StyledLink to='/home'>{name}</StyledLink>
      <JobTitle>{job}</JobTitle>
      <TextContent>
        All you need to get started in web design is your desire. In the final of the online web
        design course, you will have several projects for the first portfolio and choose a vector
        for further development.
      </TextContent>
    </Stack>
  )
}

export { InstructorMiniInfo }

const StyledLink = styled(Link)`
  text-decoration-thickness: 1px;
  color: #2196f3;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.15px;
`

const JobTitle = styled.div`
  opacity: 0.7;

  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: 0.15px;
`
const TextContent = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin-top: 14px;
`
