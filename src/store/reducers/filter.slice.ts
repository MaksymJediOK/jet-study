import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  search: string
  dateFilter: string
  categoryId: number
  eventTypeId: number
}

const initialState: FilterState = {
  search: '',
  dateFilter: '',
  categoryId: 0,
  eventTypeId: 0
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setDateFilter(state, action: PayloadAction<string>) {
      state.dateFilter = action.payload
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setEventTypeId(state, action: PayloadAction<number>) {
      state.eventTypeId = action.payload
    }
  }
})

export const { setCategoryId, setEventTypeId, setDateFilter, setSearch } = filterSlice.actions

export const filterReducer = filterSlice.reducer
