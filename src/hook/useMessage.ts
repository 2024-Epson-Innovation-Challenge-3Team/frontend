import { useContext } from 'react'
import { MessageContext } from '@/context'

export function useMessage() {
  const message = useContext(MessageContext)

  if (!message) {
    throw new Error('MessageContext에 값이 할당되지 않았습니다.')
  }

  return message
}