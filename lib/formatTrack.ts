import type { Track } from '@/types/sharedTypes'

export default function (track: Track, includeTimestamp = false) {
  if (track.artist === '') {
    return track.title
  }

  return `${includeTimestamp ? `${track.timestamp} - ` : ''}${track.artist} - ${track.title}`
}
