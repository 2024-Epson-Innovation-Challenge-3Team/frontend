import { useLayoutEffect } from 'react'
import { useAtom } from 'jotai'

import { MapAtom } from '@/atom'

export function useMap() {
  const [map, setMap] = useAtom(MapAtom)

  useLayoutEffect(() => {
    const newMap = new window.naver.maps.Map('map', {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 16,
      minZoom: 13,
      maxZoom: 19,
    })
    setMap(newMap)
  }, [setMap])

  if (!map) {
    throw new Error('map이 초기화되지 않았습니다.')
  }

  return map
}