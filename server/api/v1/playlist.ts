import fetchPlaylistHtml from '@/lib/fetchPlaylistHtml'
import getTracks, { getSeparator } from '@/lib/getTracks'

export default defineEventHandler(async () => {
  const html = await fetchPlaylistHtml()

  if (html) {
    return {
      nowPlaying: getTracks('playing_track', html) || [],
      comingSoon: getTracks('comming-soon', html) || [],
      recentlyPlayed: getTracks('recent-tracks', html) || [],
      separator: getSeparator(html) || [],
    }
  }

  return {
    nowPlaying: [],
    comingSoon: [],
    recentlyPlayed: [],
    separator: [],
  }
})
