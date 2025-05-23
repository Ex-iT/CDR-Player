import type { Track } from '@/types/sharedTypes'

export default function (track: Track, includeTimestamp = false) {
  if (track.title === '') {
    return track.artist
  }

  return `${includeTimestamp ? `${track.timestamp} - ` : ''}${track.artist} - ${track.title}`
}
