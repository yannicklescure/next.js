import { Suspense } from 'react'
import { setTimeout } from 'timers/promises'

async function Dynamic({ params = null, fallback = false }) {
  if (fallback) {
    return <div data-fallback>Dynamic Loading...</div>
  }

  await setTimeout(500)

  return <div data-slug={params.slug}>{params.slug}</div>
}

export default ({ params }) => {
  return (
    <Suspense fallback={<Dynamic fallback />}>
      <Dynamic params={params} />
    </Suspense>
  )
}
