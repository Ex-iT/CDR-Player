<script setup lang="ts">
import { REFRESH_TIMEOUT, STREAM_SOURCES } from '@/config'

const {
  // pending, // @TODO do something clever while pending
  data: playlist,
  refresh,
} = await useLazyFetch('/api/v1/playlist', {
  pick: ['nowPlaying', 'comingSoon', 'recentlyPlayed'],
})
let intervalId: number | null = null

function visibilitychange() {
  if (document.visibilityState === 'visible') {
    polling()
  } else {
    clearPolling()
  }
}

function polling() {
  refresh()

  if (!intervalId) {
    intervalId = window.setInterval(refresh, REFRESH_TIMEOUT)
  }
}

function clearPolling() {
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  // @TODO: Enable when going live
  // document.addEventListener('visibilitychange', visibilitychange)

  // Start the polling the playlist api
  // polling()
})

onBeforeUnmount(() => {
  clearPolling()
  document.removeEventListener('visibilitychange', visibilitychange)
})
</script>

<template>
  <NuxtLayout name="main">
    <template #default>
      <template v-if="playlist">
        <Card>
          <h2><span>Coming soon</span></h2>
          <BasePlaylist :tracks="playlist?.comingSoon || []" />
        </Card>
        <Card>
          <h2><span>Recently played</span></h2>
          <BasePlaylist :tracks="playlist?.recentlyPlayed || []" />
        </Card>
      </template>
      <router-view />
    </template>
    <template #footer>
      <BasePlayer
        :sources="STREAM_SOURCES"
        :now-playing="playlist?.nowPlaying || []"
      />
    </template>
  </NuxtLayout>
</template>
