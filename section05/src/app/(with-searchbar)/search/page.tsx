import BookItem from '@/components/book-item'
import { BookData } from '@/types'
export default async function Page({
  searchParams, //자동으로 dynamic
}: {
  searchParams: {
    q?: string
  }
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: 'force-cache' }
  )
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }
  const books: BookData[] = await response.json()

  return (
    <div>
      {books.map((book: any) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}
