'use client'

import { useRouter } from 'next/navigation'
import { startTransition, useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => {}
}) {
  useEffect(() => {
    console.log(error)
    console.log(error.message)
  }, [error])
  // 해당 파일의 하위경로에서 발생하는 에러는 여기서 처리
  const router = useRouter()
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh()
            reset()
          })
        }}
      >
        다시시도
      </button>
    </div>
  )
}
