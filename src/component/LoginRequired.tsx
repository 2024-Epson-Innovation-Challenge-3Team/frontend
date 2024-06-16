import { ReactNode, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { Flex, Spin, Alert } from 'antd'

import {
  MyAtom,
  AccessTokenAtom,
  IsAuthenticatingAtom,
  IsUnauthenticatedAtom,
  HasAuthenticationErrorAtom,
} from '@/atom'

const REDIRECT_PATHS = [
  '/authenticate-printer',
  '/authenticate-zone',
]

export type LoginRequiredProps = {
  children: ReactNode,
}

export function LoginRequired({ children }: LoginRequiredProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const my = useAtomValue(MyAtom)
  const accessToken = useAtomValue(AccessTokenAtom)
  const isAuthenticating = useAtomValue(IsAuthenticatingAtom)
  const isUnauthenticated = useAtomValue(IsUnauthenticatedAtom)
  const hasAuthenticationError = useAtomValue(HasAuthenticationErrorAtom)

  useEffect(() => {
    if ((!my && !accessToken) || isUnauthenticated) {
      const loginPath = REDIRECT_PATHS.includes(location.pathname)
        ? `/login?redirectPath=${location.pathname}${location.search}`
        : '/login'
  
      navigate(loginPath, { replace: true })
    }
  }, [my, location, accessToken, isUnauthenticated, navigate])

  return (
    <>
      {my ? (
        <>{children}</>
      ) : isAuthenticating ? (
        <Flex justify='center' align='center' style={{ width: '100%', height: '100%' }}>
          <Spin size='large' />
        </Flex>
      ) : hasAuthenticationError ? (
        <Alert type='error' message='Unknown Auth Error' />
      ) : null}
    </>
  )
}