import style from '@/components/review-editor.module.css'
import { createReviewAction } from '@/actions/create-review.action'
export default function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction} className={style.form_container}>
        <input name="bookId" value={bookId} hidden />
        {/* bookId인풋창는 보이지 않으나, 폼제출시에는 값을 제출하게 됨 */}
        <textarea required name="content" placeholder="리뷰내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  )
}
