import SearchableLayout from '@/components/searchable-layout'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
export default function Page() {
  const router = useRouter()
  const { name } = router.query
  return <h1>search {name}</h1>
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
