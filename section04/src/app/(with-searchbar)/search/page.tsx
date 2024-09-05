import books from '../../../mock/book.json'
import BookItem from '@/components/book-item'

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string
  }
}) {
  return (
    <div>
      {books.map((book: any) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}
