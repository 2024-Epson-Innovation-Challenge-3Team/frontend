import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadChangeParam } from 'antd/es/upload'
import { useQuery } from '@tanstack/react-query'

import { useMy } from '@/hook'
import { getJobs, getWaitingStatus } from '@/api'

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

  const {
    data: jobs,
  } = useQuery({
    queryKey: ['getJobs'],
    queryFn: getJobs,
  })

  const {
    data: waitingStatus,
  } = useQuery({
    queryKey: ['getWaitingStatus'],
    queryFn: getWaitingStatus
  })

  const info = useMemo(() => {
    if (!jobs || !waitingStatus) {
      return null
    }

    if (waitingStatus) {
      return {
        type: 'waitingStatus',
        content: `내 순서: ${waitingStatus.no}번째`,
      }
    }

    return {
      type: 'jobs',
      content: `${jobs.reduce((prev, job) => prev + job.pageCount, 0)}페이지 대기중`,
    }
  }, [jobs, waitingStatus])

  const onClickInfo = useCallback(() => {
    if (!info) {
      return
    }

    if (info.type === 'waitingStatus') {
      navigate('/waiting-status')
      return
    }

    navigate('/jobs')
  }, [info, navigate])

  const onClickFindPrinter = useCallback(() => {
    navigate('/map')
  }, [navigate])

  return {
    loginStatus,
    onClickUpload,
    onUploadFile,
    info,
    onClickInfo,
    onClickFindPrinter,
  }
}