import { createContext } from 'react'
import { HookAPI } from 'antd/es/modal/useModal'

export const ModalContext = createContext<HookAPI | null>(null)
