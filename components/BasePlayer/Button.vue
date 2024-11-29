<script setup lang="ts">
import IconLoading from '@/icons/IconLoading.vue'
import IconPlay from '@/icons/IconPlay.vue'
import IconStop from '@/icons/IconStop.vue'

defineProps<{
  isPlaying: boolean
  isLoading: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <button
    :class="{ 'pulse-animation': !isPlaying && !isLoading }"
    :disabled="isLoading"
    @click="$emit('click', $event)"
  >
    <span class="sr-only">
      <template v-if="!isPlaying && !isLoading">
        Start playing
      </template>
      <template v-if="isPlaying">
        Stop playing
      </template>
      <template v-if="isLoading">
        Loading player...
      </template>
    </span>
    <IconPlay v-if="!isPlaying && !isLoading" />
    <IconStop v-else-if="isPlaying" />
    <IconLoading v-if="isLoading" />
  </button>
</template>

<style scoped>
button {
  --size: 80px;
  --loading-size: 5px;
  --loading-color: rgb(var(--color-foreground) / 10%);

  background: none;
  border: none;
  border-radius: 50%;
  height: var(--size);
  position: absolute;
  right: 1rem;
  top: -25px;
  transition: transform var(--transition);
  width: var(--size);
}

.left-handed button {
  left: 1rem;
  right: unset;
}

button:not([disabled]) {
  cursor: pointer;
}

button:focus,
button:hover {
  transform: scale(1.08);
}

button::before {
  background-color: rgb(var(--color-highlight) / 80%);
  border-radius: 50%;
  box-shadow: var(--shadow);
  content: '';
  inset: 0;
  position: absolute;
  transition: background-color var(--transition);
}

button:focus::before,
button:hover::before {
  background-color: rgb(var(--color-highlight));
}

button svg {
  color: rgb(var(--color-foreground));
  position: relative;
}

svg circle, /* Loading */
svg path, /* Play */
svg rect { /* Stop */
  color: rgb(var(--color-foreground));
}

.pulse-animation {
  --pulse-size: 15px;
  --pulse-color: var(--color-highlight);

  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(var(--pulse-color) / 70%);
  }

  70% {
    box-shadow: 0 0 0 var(--pulse-size) rgb(var(--pulse-color) / 0%);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(var(--pulse-color) / 0%);
  }
}
</style>
