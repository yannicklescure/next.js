'use client'
import { useSelectedLayoutSegments } from 'next/navigation'
import { Suspense, use } from 'react'

function Dynamic({ fallback = false }) {
  if (fallback) return <div data-fallback>Dynamic Loading...</div>

  // The above fallback is never changed at runtime, so we can use the hook
  // conditionally.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const segments = useSelectedLayoutSegments()

  use(new Promise((resolve) => setTimeout(resolve, 500)))

  return <div data-slug={segments.join('/')}>{segments.join('/')}</div>
}

export default ({ children }) => {
  return (
    <>
      <Suspense fallback={<Dynamic fallback />}>
        <Dynamic />
      </Suspense>
      {children}
    </>
  )
}
