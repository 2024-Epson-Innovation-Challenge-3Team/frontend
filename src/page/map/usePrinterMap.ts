import { useQuery } from '@tanstack/react-query'

import { getPrinters } from '@/api'
import { useMap } from './useMap'

export function usePrinterMap() {
  const map = useMap()

  const {
    data: printers,
    isFetching: isFetchingPrinters,
  } = useQuery({
    queryKey: ['getPrinters'],
    queryFn: getPrinters,
  })

  return {
    printers,
    isFetchingPrinters,
  }
}