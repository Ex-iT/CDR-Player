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

export interface Source {
  src: string
  type: string
}

export interface UserSettings {
  leftHanded: boolean
  theme: 'auto' | 'day' | 'night'
}
