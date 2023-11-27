import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  category: string
  format: string
}

const initialState: FilterState = {
  category: '',
  format: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setFormat(state, action: PayloadAction<string>) {
      state.format = action.payload
    }
  }
})

export const { setCategory, setFormat } = filterSlice.actions

export const filterReducer = filterSlice.reducer
