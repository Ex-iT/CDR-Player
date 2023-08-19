import { ACTION_NOW_PLAYING, API_URL, CDR_BASE_URL } from '@/config'

export default async function () {
  const url = new URL(API_URL, CDR_BASE_URL)
  url.searchParams.append('action', ACTION_NOW_PLAYING)

  const fetchedData = await fetch(url)

  try {
    return await fetchedData.text()
  } catch (error) {
    console.error(error)
    return null
  }
}
