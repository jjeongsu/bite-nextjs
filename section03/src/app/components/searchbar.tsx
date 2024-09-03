'use client'

import { useRouter } from 'next/navigation' // app라우터 버전의 패키지이다.
import { useState } from 'react'

export default function Searchbar() {
  const [search, setSearch] = useState('')
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const router = useRouter()

  const onSubmit = () => {
    if (!search) return

    //프로그래매틱한 이동 -> useRouter
    router.push(`/search?q=${search}`)
  }

  return (
    <div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요..."
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  )
}
