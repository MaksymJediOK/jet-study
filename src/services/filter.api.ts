import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithToken } from 'utils/baseQueryWithToken.ts'
import { Category } from 'types/filter'
import { ShortEvent } from 'types/event'

export const filterApi = createApi({
  reducerPath: 'filter/api',
  baseQuery: baseQueryWithToken,
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: 'api/category'
      })
    }),
    getEventTypes: build.query<Category[], void>({
      query: () => ({
        url: `api/eventtype`
      })
    }),
    getFilteredEvents: build.query<ShortEvent[], string>({
      query: (params: string) => ({
        url: `api/event/${params}`
      })
    })
  })
})

export const { useGetCategoriesQuery, useGetEventTypesQuery, useGetFilteredEventsQuery } = filterApi
