import '../SignForm/SignForm.styles.scss'
import { ChangeEvent, useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UserInterests = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    frontend: true,
    backend: false,
    ml: false
  })
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })

  }
  const { frontend, backend, ml } = state
  return (
    <>
      <Box component='div' className='form-container ' sx={{ padding: '16px' }}>
        <div className='form-container-title'>Our current popular categories</div>
        <div className='form-container-subtext'>
          Choose a few you would like to see most of the time.
        </div>
      </Box>
      <FormControl component='form' sx={{ padding: '16px', display: 'block' }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={frontend} onChange={handleChange} name='frontend' />}
            label='Front end'
          />
          <FormControlLabel
            control={<Checkbox checked={backend} onChange={handleChange} name='backend' />}
            label='Back end'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Machine Learning'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Marketing'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Art'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Finances'
          />
          <Button
            variant='contained'
            sx={{ margin: '16px 0' }}
            fullWidth
            onClick={() => navigate('/home')}
          >
            Explore events
          </Button>
          <Button variant='outlined' fullWidth onClick={() => navigate('/home')}>
            skip this step
          </Button>
        </FormGroup>
      </FormControl>
    </>
  )
}

export { UserInterests }
