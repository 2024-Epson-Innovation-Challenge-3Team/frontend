import { useQuery } from '@tanstack/react-query'

import { getWaitingStatus, getJobs } from '@/api'

export function useWaitingStatusPage() {
  const {
    data: waitingStatus,
    isFetching: isFetchingWaitingStatus,
  } = useQuery({
    queryKey: ['getWaitingStatus'],
    queryFn: getWaitingStatus
  })

  const {
    data: jobs,
    isFetching: isFetchingJobs,
  } = useQuery({
    queryKey: ['getJobs'],
    queryFn: getJobs,
  })

  return {
    waitingStatus,
    isFetchingWaitingStatus,
    jobs,
    isFetchingJobs,
  }
}