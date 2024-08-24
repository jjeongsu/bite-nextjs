import { ReactNode } from 'react'

export default function SearchableLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      <div>
        <input placeholder="검색어를 입력해주세요..." />
        <button> 검색 </button>
      </div>
      {children}
    </div>
  )
}
