import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { LoggedInUser } from '@/api'

export const MyAtom = atom<LoggedInUser | null>(null)
export const AccessTokenAtom = atomWithStorage<string | null>('accessToken', null, undefined, { getOnInit: true })
export const IsAuthenticatingAtom = atom<boolean>(false)
export const IsUnauthenticatedAtom = atom<boolean>(false)
export const HasAuthenticationErrorAtom = atom<boolean>(false)
