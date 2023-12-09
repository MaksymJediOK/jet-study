import { EventCard } from '../EventCard/EventCard.tsx'
import styled from '@emotion/styled'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import { SimpleEventCard } from '../EventCard/SimpleEventCard.tsx'
import { useGetFilteredEventsQuery } from 'services/filter.api.ts'
import { EventSkeleton } from 'components/Preloaders/EventSkeleton/EventSkeleton.tsx'
import { ShortEvent } from 'types/event'
import { useAppSelector } from 'hooks/redux.ts'
import { createQueryString } from 'utils/queryBuilder.ts'

const EventsGrid = () => {
  const { search, dateFilter, eventTypeId, categoryId } = useAppSelector((state) => state.filter)
  const query = createQueryString(search, dateFilter, categoryId, eventTypeId)
  const { data, isLoading } = useGetFilteredEventsQuery(query, {
    refetchOnMountOrArgChange: true
  })

  const [isGrid, setGrid] = useState(true)
  const layoutClass = isGrid ? 'grid-container' : 'flex-container'
  return (
    <Stack gap={3} minWidth='1115px'>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <EventText>Found {data?.length} events</EventText>
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
        {!data?.length ? (
          <p>No events were found.</p>
        ) : (
          <div className={layoutClass}>
            {isLoading ? (
              <EventSkeleton />
            ) : (
              data?.map((event: ShortEvent) =>
                isGrid ? (
                  <EventCard key={event.id} {...event} />
                ) : (
                  <SimpleEventCard key={event.id} {...event} />
                )
              )
            )}
          </div>
        )}
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
