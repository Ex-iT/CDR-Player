export interface Track {
	artist: string
	title: string
	timestamp: string
}

export interface Playlist {
	nowPlaying: Track[]
	comingSoon: Track[]
	recentlyPlayed: Track[]
	separator: string
}
