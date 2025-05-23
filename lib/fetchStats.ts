import { STREAM_STATS_URL } from '@/config'

interface StatsResponse {
  currentlisteners: number
  peaklisteners: number
  maxlisteners: number
  uniquelisteners: number
  averagetime: number
  servergenre: string
  servergenre2: string
  servergenre3: string
  servergenre4: string
  servergenre5: string
  serverurl: string
  servertitle: string
  songtitle: string
  streamhits: number
  streamstatus: number
  backupstatus: number
  streamlisted: number
  streampath: string
  streamuptime: number
  bitrate: string
  samplerate: string
  content: string
  version: string
}

export default async function (): Promise<StatsResponse | null> {
  const fetchData = await fetch(STREAM_STATS_URL)

  try {
    return await fetchData.json()
  } catch (error) {
    console.error(error)
    return null
  }
}
