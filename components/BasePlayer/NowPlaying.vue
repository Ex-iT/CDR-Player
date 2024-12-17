<script setup lang="ts">
import type { Track } from '@/types/sharedTypes'
import formatTrack from '@/lib/formatTrack'

defineProps<{
  track: Track
}>()
</script>

<template>
  <transition name="fade" mode="out-in">
    <p
      :key="`${track.artist}-${track.title}`"
      class="ellipsis"
      :title="formatTrack(track)"
    >
      {{ formatTrack(track) }}
    </p>
  </transition>
</template>

<style scoped>
p {
  color: rgb(var(--color-foreground));
  font-family: Oswald, Arial, sans-serif;
  font-size: 1.6rem;
  margin-right: calc(var(--spacing-large) * 5);
  text-shadow: 0 0 var(--blur-medium) rgb(var(--color-highlight));
}

.left-handed p {
  margin-left: calc(var(--spacing-large) * 4);
  margin-right: unset;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
