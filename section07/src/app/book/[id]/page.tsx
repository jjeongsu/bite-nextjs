import { notFound } from 'next/navigation'
import style from './page.module.css'

//export const dynamicParams = false
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

async function BookDatail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}}`
  )

  if (!response.ok) {
    if (response.status === 404) {
      notFound()
    }
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

function ReviewEditor() {
  //서버액션 : 브라우저에서 호출 할 수 있는, next서버에서 실행되는 비동기 함수
  // 서버에서 실행되는 함수를 브라우저가 직접 호출하면서, 폼데이터를 전달한다.
  //제출 -> form에 action으로 설정된 createReviewAction이 실행됨
  async function createReviewAction(formData: FormData) {
    //next서버세서만 실행됨
    //Input에 입력해둔 값들이 formData형식으로 묶여서 전달됨
    'use server'
    console.log('server action is called')
    console.log(formData)
    // db에 데이터를 넣은 등의 서버에서만 실행할 수 있는 동작들이 가능
    const content = formData.get('content')?.toString() // 값이 있을 때만 문자열 타입으로 변환
    const author = formData.get('author')?.toString()
    //간결하게 함수 하나 만으로 api역할을 할수 있다.
    //오직 서버측에서만 실행되므로, 브라우저에서는 호출만하고 코드를 전달받지 않는다. 보안상으로 민감한 데이터를 다룰때 유용
  }
  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" placeholder="리뷰내용" />
        <input name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  )
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <BookDatail bookId={params.id} />
      <ReviewEditor />
    </div>
  )
}
