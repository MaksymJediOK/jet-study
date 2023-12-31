import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from 'services/auth.api.ts'
import { eventApi } from 'services/event.api.ts'
import { filterReducer } from 'store/reducers/filter.slice.ts'
import { filterApi } from 'services/filter.api.ts'

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [eventApi.reducerPath]: eventApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer,
  filter: filterReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, eventApi.middleware, filterApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
