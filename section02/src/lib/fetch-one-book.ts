import { BookData } from '@/types'

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = `https://onebite-books-server-main-seven.vercel.app/book/${id}`

  try {
    const response = await fetch(url)
    if (!response) {
      throw new Error()
    }
    return await response.json()
  } catch (err) {
    console.log(err)
    return null
  }
}
