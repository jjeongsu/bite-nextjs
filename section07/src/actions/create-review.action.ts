'use server'

//서버 액션을 파일로 분리해둘경우, use server키워드를 최상단에 적는게 일반적

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get('bookId')?.toString()
  const content = formData.get('content')?.toString()
  const author = formData.get('author')?.toString()

  //예외처리 : 서버와 클라이언트 모두 하는 것이 좋음
  if (!content || !author || !bookId) {
    return
  }

  // api 호출
  try {
    const response = await fetch(`${process.env.NEXT_API_SERVER_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({
        bookId,
        content,
        author,
      }),
    })
    console.log(response.status)
  } catch (err) {
    console.error(err)
    return
  }
}
