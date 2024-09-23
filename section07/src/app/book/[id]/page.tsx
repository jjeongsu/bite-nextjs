import { notFound } from 'next/navigation'
import style from './page.module.css'
import { createReviewAction } from '@/actions/create-review.action'
//export const dynamicParams = false
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

async function BookDatail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  )

  if (!response.ok) {
    if (response.status === 404) {
      notFound()
    }
    console.log(response)
    return <div>오류가 발생했습니다....</div>
  }

  const book = await response.json()

  const { title, subTitle, description, author, publisher, coverImgUrl } = book

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  )
}

function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction}>
        <input name="bookId" value={bookId} hidden />
        {/* bookId인풋창는 보이지 않으나, 폼제출시에는 값을 제출하게 됨 */}
        <input required name="content" placeholder="리뷰내용" />
        <input required name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  )
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDatail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
    </div>
  )
}
