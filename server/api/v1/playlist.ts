import fetchPlaylistHtml from '~~/lib/fetchPlaylistHtml'
import getTracks, { getSeparator } from '~~/lib/getTracks'

export default defineEventHandler(async (event) => {
	const html = await fetchPlaylistHtml()
	let playlist

	if (html) {
		playlist = {
			nowPlaying: getTracks('playing_track', html),
			comingSoon: getTracks('comming-soon', html),
			recentlyPlayed: getTracks('recent-tracks', html),
			separator: getSeparator(html),
		}
	}

	return playlist
})
