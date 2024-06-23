import { useState, useCallback, useMemo, useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { isObject } from 'lodash'

import { getJobs, executePrinter } from '@/api'
import { useMessage } from '@/hook'

export function useExecuteJobsPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const message = useMessage()

  const printerId = useMemo(() => {
    if (!isObject(location.state)) {
      return null
    }

    const { printerId } = location.state as { printerId?: string }
    return printerId ?? null
  }, [location])

  useMount(() => {
    if (!printerId) {
      navigate('/', { replace: true })
      message.warning('잘못된 접근입니다')
    }
  })

  const [refetchInterval, setRefetchInterval] = useState<number | false>(false)
  const isPolling = useMemo(() => !!refetchInterval, [refetchInterval])

  const startPolling = useCallback(() => {
    setRefetchInterval(1000)
  }, [])

  const endPolling = useCallback(() => {
    setRefetchInterval(false)
  }, [])

  const {
    data: jobs,
    isFetching: isFetchingJobs,
    isLoading: isLoadingJobs,
  } = useQuery({
    queryKey: ['getJobs'],
    queryFn: getJobs,
    refetchInterval,
  })

  const {
    mutateAsync: executePrinterMutate,
    isPending: isExecutingPrinter,
  } = useMutation({
    mutationFn: executePrinter,
  })

  const onClickExecute = useCallback(async () => {
    if (!printerId) {
      return
    }

    try {
      await executePrinterMutate(printerId)
      startPolling()

    } catch (e) {
      console.log(e)
    }
  }, [executePrinterMutate, startPolling, printerId])

  const isPollingEnd = useMemo(() => {
    if (!jobs) {
      return false
    }

    return jobs.every((job) => job.status === 'completed')
  }, [jobs])

  useEffect(() => {
    if (!isPollingEnd) {
      return
    }

    endPolling()
  }, [isPollingEnd, endPolling])

  return {
    jobs,
    isFetchingJobs,
    isLoadingJobs,
    isExecutingPrinter,
    isPolling,
    onClickExecute,
  }
}