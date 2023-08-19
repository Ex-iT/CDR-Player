<script setup lang="ts">
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
      {{ isPlaying ? 'Stop' : 'Play' }}
    </span>
    <svg viewBox="0 0 72 72">
      <path
        v-if="!isPlaying && !isLoading"
        fill="currentColor"
        d="M51.47 33.1 26.6 18.46c-2.02-1.18-5.12-.03-5.12 2.9v29.27a3.39 3.39 0 0 0 5.12 2.9L51.47 38.9a3.36 3.36 0 0 0 0-5.8Z"
      />
      <rect
        v-else-if="isPlaying"
        fill="currentColor"
        height="32.28"
        rx="4"
        width="32.28"
        x="19.86"
        y="19.86"
      />
      <circle
        v-if="isLoading"
        cx="50%"
        cy="50%"
        r="45%"
        fill="none"
        stroke="currentColor"
        stroke-width="10%"
        stroke-linecap="round"
        stroke-dasharray="130%"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 36 36"
          to="360 36 36"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
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
