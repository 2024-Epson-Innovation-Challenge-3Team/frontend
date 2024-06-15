import { useContext } from 'react'
import { ModalContext } from '@/context'

export function useModal() {
  const modal = useContext(ModalContext)

  if (!modal) {
    throw new Error('ModalContext에 값이 할당되지 않았습니다.')
  }

  return modal
}