import { useMemo, useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useMessage, useModal } from '@/hook'
import { verifyPrinter, LocationVerificationResult } from '@/api'

export function useVerifyPrinterPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const printerId = useMemo(() => {
    const query = new URLSearchParams(location.search)

    const id = query.get('printerId')
    return Number.parseInt(id ?? '', 10)
  }, [location])

  const message = useMessage()
  const modal = useModal()

  const { mutate: verifyPrinterMutate } = useMutation<LocationVerificationResult, AxiosError, number>({ mutationFn: verifyPrinter })

  const [isVerifying, setIsVerifying] = useState(false)

  useMount(() => {
    if (isNaN(printerId)) {
      message.error('잘못된 접근입니다')
      navigate('/', { replace: true })
      return
    }

    setIsVerifying(true)

    verifyPrinterMutate(printerId, {
      onSuccess(result) {
        switch(result.type) {
          case 'assignPrinter': {
            navigate('/execute-printer', { replace: true })
            return
          }

          case 'noFile': {
            message.warning('업로드된 파일이 없습니다. 파일을 먼저 업로드해주세요.')
            navigate('/', { replace: true })
            return
          }

          case 'queued': {
            modal.info({
              content: `대기가 있어 해당 프린터로 인쇄를 할 수 없습니다. 잠시 대기 후 알림을 받으면 프린트를 실행해주세요. (대기번호: ${result.queueNumber})`, // TODO: 문구 잘 이해할까?
              closable: false,
              maskClosable: false,
              onOk() {
                navigate('/queue-info', { replace: true })
              },
            })
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