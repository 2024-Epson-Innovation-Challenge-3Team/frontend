import { ReactNode } from 'react'

export type LoginRequiredProps = {
  children: ReactNode,
}

export function LoginRequired({ children }: LoginRequiredProps) {
  return (
    <>
      {children}
    </>
  )
}