import { useQuery } from '@tanstack/react-query'

import { getJobs } from '@/api'

export function useJobsPage() {
  const {
    data: jobs,
    isFetching: isFetchingJobs,
  } = useQuery({
    queryKey: ['getJobs'],
    queryFn: getJobs,
  })

  return {
    jobs,
    isFetchingJobs,
  }
}