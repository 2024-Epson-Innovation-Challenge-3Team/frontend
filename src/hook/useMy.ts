import { useMemo } from 'react'
import { useAtomValue } from 'jotai'

import {
  MyAtom,
  AccessTokenAtom,
  IsUnauthenticatedAtom,
  HasAuthenticationErrorAtom,
  IsAuthenticatingAtom,
} from '@/atom'

export type LoginStatus = 'undefined' | 'loading' | 'login' | 'logout' | 'error'

export function useMy() {
  const my = useAtomValue(MyAtom)
  const accessToken = useAtomValue(AccessTokenAtom)
  const isUnauthenticated = useAtomValue(IsUnauthenticatedAtom)
  const hasAuthenticationError = useAtomValue(HasAuthenticationErrorAtom)
  const isAuthenticating = useAtomValue(IsAuthenticatingAtom)

  const loginStatus = useMemo<LoginStatus>(() => {
    if (my) {
      return 'login'
    }

    if (hasAuthenticationError) {
      return 'error'
    }

    if (!accessToken || isUnauthenticated) {
      return 'logout'
    }

    if (isAuthenticating) {
      return 'loading'
    }

    return 'undefined'
  }, [my, accessToken, isUnauthenticated, hasAuthenticationError, isAuthenticating])

  return {
    my,
    loginStatus,
  }
}