import { AppBar, Box, Toolbar, Button } from '@mui/material'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <HeaderText>Jet Study</HeaderText>
          <NavigationText>
            <HeaderText>Events</HeaderText>
            <HeaderText>Calendar</HeaderText>
            <HeaderText>FAQ</HeaderText>
          </NavigationText>

          <HeaderWrapper>
            <Button variant='text'>BECOME INSTRUCTOR</Button>
            <Button variant='outlined'>log in</Button>
            <Button variant='contained'>sign in</Button>
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const HeaderText = styled.div`
  color: #000;
  font-family:
    Roboto Flex,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const NavigationText = styled.div`
  display: flex;
  gap: 16px;
`

export { Header }
