import { useRouter } from 'next/router'
export default function Page() {
  const router = useRouter()
  const { name } = router.query
  return <h1>search {name}</h1>
}
