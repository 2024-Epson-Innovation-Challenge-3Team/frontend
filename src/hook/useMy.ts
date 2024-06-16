import { useAtomValue } from 'jotai'

import { MyAtom } from '@/atom'

export function useMy() {
  const my = useAtomValue(MyAtom)

  return my
}