import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadChangeParam } from 'antd/es/upload'

import { useMy } from '@/hook'

export function useHomePage() {
  const navigate = useNavigate()

  const { loginStatus } = useMy()

  const onClickUpload = useCallback(() => {
    if (loginStatus === 'logout') {
      navigate('/login')
    }
  }, [loginStatus, navigate])

  const onUploadFile = useCallback((info: UploadChangeParam) => {
    navigate('/create-job', {
      state: {
        file: info.fileList[0].originFileObj,
      },
    })
  }, [navigate])

  // const onClickPendingJobInfo = useCallback(() => {

  // }, [navigate])

  // const onClickWaitingInfo = useCallback(() => {

  // }, [navigate])

  const onClickFindPrinter = useCallback(() => {
    navigate('/map')
  }, [navigate])

  return {
    loginStatus,
    onClickUpload,
    onUploadFile,
    // onClickPendingJobInfo,
    // onClickWaitingInfo,
    onClickFindPrinter,
  }
}