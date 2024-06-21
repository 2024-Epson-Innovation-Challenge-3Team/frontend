import { createBrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/component'
import {
  MobileLayout,
  MainLayout,
  LoginRequiredLayout,
} from '@/layout'
import {
  HomePage,
  LoginPage,
  CreateJobPage,
  MapPage,
  VerifyZonePage,
  VerifyPrinterPage,
  ExecuteJobsPage,
  WaitingStatusPage,
  JobsPage,
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
            path: '/map',
            element: <MapPage />,
          },
          {
            element: <LoginRequiredLayout />,
            children: [
              {
                path: '/create-job',
                element: <CreateJobPage />,
              },
              {
                path: '/verify-zone',
                element: <VerifyZonePage />,
              },
              {
                path: '/verify-printer',
                element: <VerifyPrinterPage />,
              },
              {
                path: '/execute-printer',
                element: <ExecuteJobsPage />,
              },
              {
                path: '/waiting-status',
                element: <WaitingStatusPage />,
              },
              {
                path: '/jobs',
                element: <JobsPage />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <ErrorBoundary />,
  },
])
