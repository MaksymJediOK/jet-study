import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <Stack direction='row' gap={12}>
        <Title to='/home'>Jet Study</Title>
        <Stack direction='row' gap={3}>
          <Stack gap={2}>
            <FooterItem>Events</FooterItem>
            <FooterItem>Calendar</FooterItem>
            <FooterItem>Profile</FooterItem>
          </Stack>
          <Stack gap={2}>
            <FooterItem>My courses</FooterItem>
            <FooterItem>Become instructor</FooterItem>
            <FooterItem>FAQ</FooterItem>
          </Stack>
        </Stack>
      </Stack>
    </FooterContainer>
  )
}

export { Footer }

const FooterContainer = styled.div`
  background: #212121;
  padding: 100px 0 0 220px;
`
const Title = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 100%;
`
const FooterItem = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.15px;
`
