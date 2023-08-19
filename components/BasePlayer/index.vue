<script setup lang="ts">
import Button from './Button.vue'
import NowPlaying from './NowPlaying.vue'
import type { Source, Track } from '@/types/sharedTypes'

const props = defineProps<{
  sources: Array<Source>
  nowPlaying: Array<Track>
}>()

const isLoading = ref(true)
const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)
const getNowPlayingTrack = computed(() => props.nowPlaying.at(0) || {
  artist: '',
  title: '',
  timestamp: '',
},
)

function togglePlayer() {
  if (audioRef.value) {
    audioRef.value[isPlaying.value ? 'pause' : 'play']()

    isPlaying.value = !isPlaying.value
  }
}

function handlePause({ target }: Event) {
  // Make the player actually stop downloading
  // when the pause button is clicked
  const audio = target as HTMLAudioElement
  audio.src = ''
  audio.src = audio.currentSrc
}

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <section>
    <audio ref="audioRef" hidden @pause="handlePause">
      <source v-for="{ src, type }, index in sources" :key="`source-${index}`" :src="src" :type="type">
    </audio>

    <div>
      <Button
        :is-loading="isLoading"
        :is-playing="isPlaying"
        @click="togglePlayer"
      />

      <NowPlaying :track="getNowPlayingTrack" />
    </div>
  </section>
</template>

<style scoped>
section {
  backdrop-filter: blur(var(--blur-medium));
  background-color: rgb(var(--color-highlight) / 50%);
  bottom: 0;
  box-shadow: var(--shadow);
  min-height: calc(var(--spacing-large) * 4);
  position: sticky;
  z-index: 1; /* Always on top of the content */
}

section::before {
  border-image-slice: 1;
  border-image-source: linear-gradient(to top right, var(--gradient-stops));
  border-style: solid;
  border-width: 1px;
  content: '';
  inset: 0;
  position: absolute;
}

div {
  margin: 0 auto;
  padding: 1rem 2rem;
  position: relative;
}

@media (width > 412px) {
  div {
    max-width: var(--width-max);
  }
}
</style>
