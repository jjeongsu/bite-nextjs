'use client'

import { useRouter, useSearchParams } from 'next/navigation' // app라우터 버전의 패키지이다.
import { useState } from 'react'
import style from './searchbar.module.css'
import { useEffect } from 'react'
export default function Searchbar() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const searchParms = useSearchParams()

  const q = searchParms.get('q')

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search || q === search) return
    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  useEffect(() => {
    setSearch(q || '')
  }, [q])
  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력해주세요..."
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  )
}
