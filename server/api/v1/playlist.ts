// import fetchPlaylistHtml from '@/lib/fetchPlaylistHtml'
// import getTracks, { getSeparator } from '@/lib/getTracks'
import fetchStats from '@/lib/fetchStats'

export default defineEventHandler(async () => {
  const stats = await fetchStats()

  if (stats) {
    return {
      nowPlaying: [{
        artist: stats.songtitle,
        title: '',
        timestamp: '',
      }],
      comingSoon: [],
      recentlyPlayed: [],
      separator: [],
    }
  }
  // const html = await fetchPlaylistHtml()

  // if (html) {
  //   return {
  //     nowPlaying: getTracks('playing_track', html) || [],
  //     comingSoon: getTracks('comming-soon', html) || [],
  //     recentlyPlayed: getTracks('recent-tracks', html) || [],
  //     separator: getSeparator(html) || [],
  //   }
  // }

  return {
    nowPlaying: [],
    comingSoon: [],
    recentlyPlayed: [],
    separator: [],
  }
})
