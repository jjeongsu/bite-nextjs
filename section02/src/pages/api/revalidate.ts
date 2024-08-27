import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate('/')
    return res.json({ revalidation: true })
  } catch (err) {
    res.status(500).send('revalidation failed')
  }
}
