import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationRoutes } from './routes/ApplicationRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './utils/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <ApplicationRoutes />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
