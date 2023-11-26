import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithToken } from 'utils'
import { TokenResponse, LoginType, RegistrationType } from 'types/auth'

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: baseQueryWithToken,
  endpoints: (build) => ({
    login: build.mutation<TokenResponse, LoginType>({
      query: (body: LoginType) => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    register: build.mutation<void, RegistrationType>({
      query: (body: RegistrationType) => ({
        url: '/register',
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation } = authApi
