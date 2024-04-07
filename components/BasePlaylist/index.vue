<script setup lang="ts">
import type { Track } from '@/types/sharedTypes'

defineProps<{
  tracks: Track[]
}>()
</script>

<template>
  <article>
    <TransitionGroup class="list" name="fade" tag="ul">
      <li v-for="track in tracks" :key="`track-${track.artist}-${track.title}`">
        <template v-if="track.timestamp">
          [{{ track.timestamp }}]
        </template>{{ track.artist }} - {{ track.title }}
      </li>
    </TransitionGroup>
  </article>
</template>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  position: relative;
}

li {
  background-color: rgb(var(--color-foreground) / 20%);
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 1.2rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding: var(--spacing-small) var(--spacing-small);
}

li:nth-child(even) {
  background-color: rgb(var(--color-foreground) / 30%);
}

li:first-child {
  border-top-left-radius: var(--border-radius);
}

li:last-child {
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  mask:
    linear-gradient(#000 0 0),
    linear-gradient(#0000,#000 90%) padding-box;
  mask-composite: exclude;
}

li:hover {
  background-color: rgb(var(--color-foreground) / 50%);
}

p {
  display: flex;
  gap: var(--spacing-small);
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all var(--transition);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* Ensure leaving items are taken out of layout flow
 * so that moving animations can be calculated correctly.
 */
.fade-leave-active {
  position: absolute;
}
</style>
