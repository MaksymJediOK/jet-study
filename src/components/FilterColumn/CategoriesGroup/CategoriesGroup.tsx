import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { ChangeEvent, useState } from 'react'

const CategoriesGroup = () => {
  const [value, setValue] = useState('All')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <FormControl>
      <FormLabel id='radio-buttons-group'>Categories</FormLabel>
      <RadioGroup
        aria-labelledby='radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value='All' control={<Radio />} label='All' />
        <FormControlLabel
          value='Software Development'
          control={<Radio />}
          label='Software Development'
        />
        <FormControlLabel value='Design' control={<Radio />} label='Design' />
        <FormControlLabel value='Marketing' control={<Radio />} label='Marketing' />
        <FormControlLabel value='Humanitarium' control={<Radio />} label='Humanitarium' />
      </RadioGroup>
    </FormControl>
  )
}

export { CategoriesGroup }
