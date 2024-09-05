import BookItem from '@/components/book-item'
import { BookData } from '@/types'
export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string
  }
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SEVER_URL}/book/search?q=${searchParams.q}`
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
