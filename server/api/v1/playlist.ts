import fetchHistoryHtml from '@/lib/fetchHistoryHtml'
import getTracksFromHistory from '@/lib/getTracksFromHistory'

export default defineEventHandler(async () => {
  const historyHtml = await fetchHistoryHtml()

  if (historyHtml) {
    const history = getTracksFromHistory(historyHtml)

    return {
      nowPlaying: history.filter(track => track.current),
      comingSoon: [],
      recentlyPlayed: history.filter(track => !track.current),
      separator: [],
    }
  }

  return {
    nowPlaying: [],
    comingSoon: [],
    recentlyPlayed: [],
    separator: [],
  }
})
