import { createBrowserRouter } from 'react-router-dom'

import { MobileLayout, MainLayout } from '@/layout'
import { HomePage } from '@/page'
import { ErrorBoundary } from '@/component'

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          }
        ],
      }
    ],
    errorElement: <ErrorBoundary />,
  },
])
