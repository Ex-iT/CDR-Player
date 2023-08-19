import type { Track } from '@/types/sharedTypes'

export default function (track: Track, includeTimestamp = false) {
  return `${includeTimestamp ? `${track.timestamp} - ` : ''}${
    track.artist
  } - ${track.title}`
}
