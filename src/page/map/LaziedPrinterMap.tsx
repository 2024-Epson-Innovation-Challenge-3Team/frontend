import { lazy } from 'react'
import { getDefaultStore } from 'jotai'

import { MapAtom } from '@/atom'
import { loadMap } from './loadMap'

export const LaziedPrinterMap = lazy(async () => {
  await loadMap()

  const map = new window.naver.maps.Map('_map')

  const store = getDefaultStore()
  store.set(MapAtom, map)

  const { PrinterMap } = await import('./PrinterMap')
  return { default: PrinterMap }
})