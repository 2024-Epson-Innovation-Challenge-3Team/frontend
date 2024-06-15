import { useContext } from 'react'
import { NotificationContext } from '@/context'

export function useNotification() {
  const notification = useContext(NotificationContext)

  if (!notification) {
    throw new Error('NotificationContext에 값이 할당되지 않았습니다.')
  }

  return notification
}