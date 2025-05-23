import { STREAM_HISTORY_URL } from '@/config'

export default async function (): Promise<string | null> {
  const fetchData = await fetch(STREAM_HISTORY_URL)

  try {
    const response = await fetchData.text()

    return response
  } catch (error) {
    console.error(error)
    return null
  }
}
