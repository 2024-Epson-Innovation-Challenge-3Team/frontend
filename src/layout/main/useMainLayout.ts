import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useMount } from 'react-use'
import { useMutation } from '@tanstack/react-query'
import { useAtom, useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import { AxiosError } from 'axios'

import {
  MyAtom,
  AccessTokenAtom,
  IsAuthenticatingAtom,
  IsUnauthenticatedAtom,
  HasAuthenticationErrorAtom,
} from '@/atom'
import { LoggedInUser, login } from '@/api'

export function useMainLayout() {
  const location = useLocation()

  const [my, setMy] = useAtom(MyAtom)
  const [accessToken, setAccessToken] = useAtom(AccessTokenAtom)
  const setIsAuthenticating = useSetAtom(IsAuthenticatingAtom)
  const [isUnauthenticated, setIsUnauthenticated] = useAtom(IsUnauthenticatedAtom)
  const setHasAuthenticationError = useSetAtom(HasAuthenticationErrorAtom)

  const { mutate: authenticateMutate } = useMutation<LoggedInUser, AxiosError>({
    mutationFn: login,
  })

  useMount(() => {
    if (!my && accessToken) {
      setIsAuthenticating(true)

      authenticateMutate(undefined, {
        onSuccess(my) {
          setMy(my)
          setIsUnauthenticated(false)
        },

        onError(error) {
          if (error.response?.status === 401) {
            setAccessToken(RESET)
            setIsUnauthenticated(true)
            return
          }

          console.log(error)
          setHasAuthenticationError(true)
        },

        onSettled() {
          setIsAuthenticating(false)
        },
      })
    }
  })

  const isHome = useMemo(() => {
    return location.pathname === '/'
  }, [location])

  const isLoggedOut = useMemo(() => {
    return !accessToken || isUnauthenticated
  }, [accessToken, isUnauthenticated])

  return {
    my,
    isLoggedOut,
    isHome,
  }
}