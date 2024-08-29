import { BookData } from '@/types'

export default async function fetchRandombooks(): Promise<BookData[]> {
  const url = 'https://onebite-books-server-main-seven.vercel.app/book/random'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error()
    }
    return await response.json()
  } catch (err) {
    console.error(err)
    return []
  }
}
