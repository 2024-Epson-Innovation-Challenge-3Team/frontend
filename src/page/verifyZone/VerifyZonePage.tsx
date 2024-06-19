import { Flex, Spin } from 'antd'

import { useVerifyZonePage } from './useVerifyZonePage'

export function VerifyZonePage() {
  const {
    isVerifying,
  } = useVerifyZonePage()

  return (
    <Flex style={{ height: '100%' }} justify='center' align='center'>
      <Spin spinning={isVerifying} size='large' tip='구역 인증중'>
        <div style={{ padding: '50px' }} />
      </Spin>
    </Flex>
  )
}