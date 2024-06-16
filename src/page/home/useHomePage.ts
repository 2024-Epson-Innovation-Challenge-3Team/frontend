import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useMy } from '@/hook'

export function useHomePage() {
  const navigate = useNavigate()

  const { loginStatus } = useMy()

  const onUploadFile = useCallback(() => {

  }, [])

  const onClickPendingJobInfo = useCallback(() => {

  }, [navigate])

  const onClickWaitingInfo = useCallback(() => {

  }, [navigate])

  return {
    loginStatus,
    onUploadFile,
    onClickPendingJobInfo,
    onClickWaitingInfo,
  }
}