import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { registerReducer } from './reducers/register.slice'

const rootReducer = combineReducers({
  register: registerReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
