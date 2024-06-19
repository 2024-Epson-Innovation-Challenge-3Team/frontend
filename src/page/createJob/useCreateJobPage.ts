import { useMemo, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { isObject } from 'lodash'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { useMessage } from '@/hook'
import { createJob, JobReq } from '@/api'

const schema = z.object({
  count: z.number(),
  direction: z.string(),
  countPerPage: z.number(),
  side: z.string(),
})

type PrintSetting = z.infer<typeof schema>

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

  const { mutate: createJobMutate, isPending: isCreating } = useMutation<void, AxiosError, JobReq>({
    mutationFn: createJob,
  })

  const onFormValid = useCallback<SubmitHandler<PrintSetting>>((data) => {
    if (!file) {
      return
    }

    createJobMutate({
      file,
      ...data,
    }, {
      onSuccess() {
        navigate(-1)
        message.success('프린트 업로드 완료')
      },

      onError(error) {
        console.log(error)
        message.error('프린트 업로드 실패')
      }
    })
  }, [createJobMutate, file, navigate, message])

  const onFormInvalid = useCallback<SubmitErrorHandler<PrintSetting>>((errors) => {
    console.log(errors)
  }, [])

  const { control, handleSubmit, watch } = useForm<PrintSetting>({
    resolver: zodResolver(schema),
    defaultValues: {
      count: 1,
      direction: 'vertical',
      countPerPage: 1,
      side: 'single',
    }
  })

  const onSubmit = useMemo(
    () => handleSubmit(onFormValid, onFormInvalid),
    [handleSubmit, onFormValid, onFormInvalid],
  )

  const printSetting = watch()

  useEffect(() => {
    // TODO: 미리보기 변경
  }, [printSetting])

  return {
    file,
    control,
    onSubmit,
    isCreating,
  }
}