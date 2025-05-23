export const CDR_BASE_URL = 'https://www.cooldanceradio.com'
export const API_URL = '/wp-admin/admin-ajax.php'
export const ACTION_NOW_PLAYING = 'rdj_now_playing'
export const STREAM_SOURCES = [
  {
    src: 'https://stream.cooldanceradio.com/stream1/stream.mp3',
    type: 'audio/mp3',
  },
]
export const SHOUTCAST_BASE_URL = 'http://stream.cooldanceradio.com:8360'
export const STREAM_STATS_URL = `${SHOUTCAST_BASE_URL}/stats?sid=1&json=1`
export const STREAM_HISTORY_URL = `${SHOUTCAST_BASE_URL}/played.html?sid=1`
export const REFRESH_TIMEOUT = 10_000 // 10 seconds
export const STORE_USER_SETTINGS = 'user-settings-v1'
