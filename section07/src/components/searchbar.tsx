'use client'

import { useRouter, useSearchParams } from 'next/navigation' // app라우터 버전의 패키지이다.
import { useState } from 'react'
import style from './searchbar.module.css'
import { useEffect } from 'react'
export default function Searchbar() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  //이전 page router 에서는
  // router.query.q
  const searchParms = useSearchParams() //현재 페이지에 전달된 query string 꺼냄

  /*useSearchParams는 비동기적으로 동작*/

  const q = searchParms.get('q') // 가져올 query string

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if (!search || q === search) return //현재 검색어 == 사용자 입력어 라면 불필요한 푸시 방지
    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  } //입력창에서 enter눌러도 바로 검색되도록

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
