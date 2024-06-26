import { Provider, getDefaultStore } from 'jotai'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider, message, Modal, notification } from 'antd'

import { router } from './router'
import { MessageContext, ModalContext, NotificationContext } from './context'
import { antdTheme } from './config'

const queryClient = new QueryClient()
const store = getDefaultStore()

export function App() {
  const [messageApi, messageContextHolder] = message.useMessage({ top: 48 })
  const [modalApi, modalContextHolder] = Modal.useModal()
  const [notificationApi, notificationContextHolder] = notification.useNotification()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools buttonPosition='bottom-left' />
        <ConfigProvider theme={antdTheme}>
          <MessageContext.Provider value={messageApi}>
            <ModalContext.Provider value={modalApi}>
              <NotificationContext.Provider value={notificationApi}>
                {messageContextHolder}
                {modalContextHolder}
                {notificationContextHolder}
                <RouterProvider router={router} />
              </NotificationContext.Provider>
            </ModalContext.Provider>
          </MessageContext.Provider>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  )
}
