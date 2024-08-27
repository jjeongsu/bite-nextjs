//CSS module
import SearchableLayout from '@/components/searchable-layout'
import style from './index.module.css'
import { ReactNode, useEffect } from 'react'
import BookItem from '@/components/book-item'
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import fetchBooks from '@/lib/fetch-books'
import fetchRandombooks from '@/lib/fetch-random-books'

export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandombooks(),
  ])

  return {
    props: {
      allBooks,
      recoBooks,
    },
    revalidate: 3,
  }
}

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map(book => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map(book => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  )
}
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
