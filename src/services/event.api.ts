import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithToken } from 'utils/baseQueryWithToken.ts'
import { DetailedEvent, IEvent } from 'types/event'

export const eventApi = createApi({
  reducerPath: 'event/api',
  baseQuery: baseQueryWithToken,
  endpoints: (build) => ({
    getAllEvents: build.query<IEvent[], void>({
      query: () => ({
        url: 'api/event'
      })
    }),
    getEventById: build.query<DetailedEvent, number>({
      query: (eventId: number = 1) => ({
        url: `api/event/${eventId}`
      })
    })
  })
})

export const { useGetAllEventsQuery, useGetEventByIdQuery } = eventApi
