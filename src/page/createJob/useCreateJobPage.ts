import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { isObject } from 'lodash'

import { useMessage } from '@/hook'

export function useCreateJobPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const message = useMessage()

  const file = useMemo(() => {
    if (!isObject(location.state)) {
      return null
    }

    const { file } = location.state as { file?: File }
    return file ?? null
  }, [location])

  useMount(() => {
    if (!file) {
      navigate('/', { replace: true })
      message.warning('잘못된 접근입니다')
    }
  })

  return {
    file,
  }
}