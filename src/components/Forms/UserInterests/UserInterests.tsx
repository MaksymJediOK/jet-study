import '../SignForm.styles.scss'
import { ChangeEvent, useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'

const UserInterests = () => {
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
            label='Machine Learning'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Machine Learning'
          />
          <FormControlLabel
            control={<Checkbox checked={ml} onChange={handleChange} name='ml' />}
            label='Machine Learning'
          />
          <Button variant='contained' sx={{ margin: '16px 0' }} fullWidth>
            Explore events
          </Button>
          <Button variant='outlined' fullWidth>
            skip this step
          </Button>
        </FormGroup>
      </FormControl>
    </>
  )
}

export { UserInterests }
