import SearchableLayout from '@/components/searchable-layout'
import { ReactNode } from 'react'
import BookItem from '@/components/book-item'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import fetchBooks from '@/lib/fetch-books'

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //context: 브라우저 로 부터 받은 요청에 대한 모든 정보 보유
  const q = context.query.q
  const books = await fetchBooks(q as string)

  return {
    props: { books },
  }
}

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  )
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
