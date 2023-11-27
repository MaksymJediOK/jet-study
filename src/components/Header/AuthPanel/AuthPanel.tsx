import { Avatar, Menu, MenuItem, Stack } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { tokenKey } from 'utils/constants'
import { useNavigate } from 'react-router-dom'

const AuthPanel = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    localStorage.setItem(tokenKey, '')
    handleClose()
    navigate(0)
  }
  return (
    <Stack direction='row' gap={3} sx={{ cursor: 'pointer' }}>
      <div onClick={handleClick}>
        <Avatar src='/broken-image.jpg' />
      </div>
      <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Stack>
  )
}

export { AuthPanel }
