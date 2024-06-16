import { atom } from 'jotai'
import axios, { CreateAxiosDefaults } from 'axios'

import { AccessTokenAtom } from './login.atom'

export const ClientAtom = atom((get) => {
  const config: CreateAxiosDefaults = {
    baseURL: `${import.meta.env.VITE_API_URL}/`,
  }

  const accessToken = get(AccessTokenAtom)

  if (accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  const client = axios.create(config)
  return client
})