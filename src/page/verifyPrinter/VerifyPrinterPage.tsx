import { Flex, Spin } from 'antd'

import { useVerifyPrinterPage } from './useVerifyPrinterPage'

export function VerifyPrinterPage() {
  const {
    isVerifying,
  } = useVerifyPrinterPage()

  return (
    <Flex style={{ height: '100%' }} justify='center' align='center'>
      <Spin spinning={isVerifying} size='large' tip='프린터 인증중'>
        <div style={{ padding: '50px' }} />
      </Spin>
    </Flex>
  )
}