import { EventCard } from '../EventCard/EventCard.tsx'
import styled from '@emotion/styled'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import { SimpleEventCard } from '../EventCard/SimpleEventCard.tsx'

const EventsGrid = () => {
  const [isGrid, setGrid] = useState(true)
  const items = [1, 2, 3, 4, 5, 6]
  const layoutClass = isGrid ? 'grid-container' : 'flex-container'
  return (
    <Stack gap={3} minWidth='1115px'>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <EventText>Found 45 events</EventText>
        <Stack direction='row' gap={2}>
          <IconButton onClick={() => setGrid(true)}>
            <DashboardIcon />
          </IconButton>
          <IconButton onClick={() => setGrid(false)}>
            <FormatListBulletedIcon />
          </IconButton>
        </Stack>
      </Stack>

      <div>
        <div className={layoutClass}>
          {items.map((_, index) =>
            isGrid ? <EventCard key={index} /> : <SimpleEventCard key={index} />
          )}
        </div>
      </div>
    </Stack>
  )
}

const EventText = styled.div`
  color: #606060;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.15px;
`

export { EventsGrid }
