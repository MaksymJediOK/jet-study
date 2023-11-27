import { AppBar, Box, Toolbar, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'
import { tokenKey } from 'utils/constants'
import { AuthPanel } from 'components/Header/AuthPanel/AuthPanel.tsx'

const Header = () => {
  const token = localStorage.getItem(tokenKey)
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HeaderText to='/home'>Jet Study</HeaderText>
          <NavigationText>
            <HeaderText to='/home'>Events</HeaderText>
            <HeaderText to='/home'>Calendar</HeaderText>
            <HeaderText to='/home'>FAQ</HeaderText>
          </NavigationText>
          <HeaderWrapper>
            <Button variant='text'>BECOME INSTRUCTOR</Button>
            {token ? (
              <AuthPanel />
            ) : (
              <>
                <Button variant='outlined' onClick={() => navigate('/auth/login')}>
                  log in
                </Button>
                <Button variant='contained' onClick={() => navigate('/auth/register')}>
                  sign in
                </Button>
              </>
            )}
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const HeaderText = styled(Link)`
  text-decoration: none;
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
