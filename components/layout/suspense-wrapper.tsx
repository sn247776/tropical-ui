'use client'

import { Suspense } from 'react'


export default function SuspenseWrapper({children, fallback}: {children: React.ReactNode ,fallback: React.ReactNode}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
