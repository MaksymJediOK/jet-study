import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { registerReducer } from './reducers/register.slice'
import { authApi } from 'services/auth.api.ts'

const rootReducer = combineReducers({
  register: registerReducer,
  [authApi.reducerPath]: authApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
