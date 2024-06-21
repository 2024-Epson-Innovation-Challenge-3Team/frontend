import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useMessage, useModal } from '@/hook'
import { verifyZone, LocationVerificationResult } from '@/api'

export function useVerifyZonePage() {
  const location = useLocation()
  const navigate = useNavigate()

  const zoneId = useMemo(() => {
    const query = new URLSearchParams(location.search)

    const id = query.get('zoneId')
    return Number.parseInt(id ?? '', 10)
  }, [location])

  const message = useMessage()
  const modal = useModal()

  const { mutate: verifyZoneMutate } = useMutation<LocationVerificationResult, AxiosError, number>({ mutationFn: verifyZone })

  const [isVerifying, setIsVerifying] = useState(false)

  useMount(() => {
    if (isNaN(zoneId)) {
      message.error('잘못된 접근입니다')
      navigate('/', { replace: true })
      return
    }

    setIsVerifying(true)

    verifyZoneMutate(zoneId, {
      onSuccess(result) {
        switch(result.type) {
          case 'assignPrinter': {
            modal.info({
              content: `대기줄이 없어 바로 인쇄를 할 수 있습니다. '${result.printerName}'프린터 앞에서 인쇄 실행 버튼을 눌러주세요.`, // TODO: 문구 잘 이해할까?
              closable: false,
              maskClosable: false,
              onOk() {
                navigate('/execute-print', { replace: true })
              },
            })
            return
          }

          case 'noFile': {
            message.warning('업로드된 파일이 없습니다. 파일을 먼저 업로드해주세요.')
            navigate('/', { replace: true })
            return
          }

          case 'wait': {
            navigate('/waiting-status', { replace: true })
          }
        }
      },

      onError(error) {
        console.log(error)
        // TODO: 에러 처리
      },

      onSettled() {
        setIsVerifying(false)
      }
    })
  })

  return {
    isVerifying,
  }
}