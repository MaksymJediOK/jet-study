import { createSlice } from '@reduxjs/toolkit'

interface RegisterState {
  email: string
  password: string
  interests?: string[]
}

const initialState: RegisterState = {
  email: '',
  password: ''
}


const registerSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    setData() {
    }
  }
})

export const { setData } = registerSlice.actions
export const registerReducer = registerSlice.reducer
