import { useState, useCallback, useMemo, useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import { getJobs, executePrinter } from '@/api'

export function useExecuteJobsPage() {
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
    try {
      await executePrinterMutate()
      startPolling()

    } catch (e) {
      console.log(e)
    }
  }, [executePrinterMutate, startPolling])

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