import { Spin } from 'antd'

import { usePrinterMap } from './usePrinterMap'

export function PrinterMap() {
  const {
    isFetchingPrinters,
  } = usePrinterMap()

  return (
    <Spin
      spinning={isFetchingPrinters}
      fullscreen
    />
  )
}