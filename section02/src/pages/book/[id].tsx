import style from '../book/[id].module.css'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import fetchOneBook from '@/lib/fetch-one-book'

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id
  const book = await fetchOneBook(Number(id))
  return {
    props: { book },
  }
}

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return '문제가 발생했습니다. 다시 시도하세요'

  const { id, title, subTitle, author, publisher, coverImgUrl, description } =
    book

  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
        className={style.cover_img_container}
      >
        <img src={coverImgUrl} />
      </div>

      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  )
}
