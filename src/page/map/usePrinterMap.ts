import { useEffect } from 'react'
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

  useEffect(() => {
    if (!printers) {
      return
    }

    const markers = printers.map((printer) => {
      const position = new window.naver.maps.LatLng(printer.lat, printer.lng)

      let color
      let busyLevel
      if (printer.busyLevel === 'full') {
        color = '#D3455B'
        busyLevel = '포화'
      } else if (printer.busyLevel === 'busy') {
        color = '#F7C325'
        busyLevel = '혼잡'
      } else {
        color = '#1AAE9F'
        busyLevel = '쾌적'
      }

      const marker = new window.naver.maps.Marker({
        map,
        position,
        icon: {
          content: `<div style="cursor:pointer;width:36px;height:36px;line-height:36px;font-size:16px;color:white;text-align:center;font-weight:bold;border-radius:50%;background:${color};">${busyLevel}</div>`,
          size: new window.naver.maps.Size(36, 36),
          anchor: new window.naver.maps.Point(18, 18),
        }
      })

      return marker
    })

    return () => {
      markers.forEach((marker) => {
        marker.setMap(null)
      })
    }
  }, [map, printers])

  return {
    isFetchingPrinters,
  }
}