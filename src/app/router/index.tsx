import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import RootLayout from '@/components/layout/RootLayout'

const Home = lazy(() => import('@/modules/home'))
const About = lazy(() => import('@/modules/about'))
const Services = lazy(() => import('@/modules/services'))
const Team = lazy(() => import('@/modules/team'))
const Contact = lazy(() => import('@/modules/contact'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}><Home /></Suspense> },
      { path: 'about', element: <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}><About /></Suspense> },
      { path: 'services', element: <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}><Services /></Suspense> },
      { path: 'team', element: <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}><Team /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}><Contact /></Suspense> },
    ],
  },
])
