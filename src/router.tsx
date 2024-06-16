import { createBrowserRouter } from 'react-router-dom'

import { MobileLayout, MainLayout } from '@/layout'
import { ErrorBoundary, LoginRequired } from '@/component'
import {
  HomePage,
  LoginPage,
  CreateJobPage,
} from '@/page'

export const router = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/create-job',
            element: <LoginRequired><CreateJobPage /></LoginRequired>,
          },
        ],
      },
    ],
    errorElement: <ErrorBoundary />,
  },
])
