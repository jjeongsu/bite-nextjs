import SearchableLayout from '@/components/searchable-layout'
import { ReactNode, useEffect, useState } from 'react'
import BookItem from '@/components/book-item'
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next'
import fetchBooks from '@/lib/fetch-books'
import { useRouter } from 'next/router'
import { BookData } from '@/types'
import Head from 'next/head'

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //context: 브라우저 로 부터 받은 요청에 대한 모든 정보 보유
//   const q = context.query.q
//   const books = await fetchBooks(q as string)

//   return {
//     props: { books },
//   }
// }

export default function Page() {
  const router = useRouter()

  const [books, setBooks] = useState<BookData[]>([])
  const q = router.query.q

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string)
    setBooks(data)
  }

  useEffect(() => {
    if (q) {
      fetchSearchResult()
    }
  }, [q])

  return (
    <div>
      <Head>
        <title>📚 한입에북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입에북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입에북스에 등록된 도서를 살펴보세요"
        />
      </Head>
      {books.map(book => (
        <BookItem key={book.id} {...book}></BookItem>
      ))}
    </div>
  )
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
