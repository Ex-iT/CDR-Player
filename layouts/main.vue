<script setup lang="ts">
import isItNight from '@/lib/isItNight'
import { STORE_USER_SETTINGS } from '@/config'
import type { UserSettings } from '@/types/sharedTypes'

const isNight = isItNight()
const userSettings = useWebStorage(STORE_USER_SETTINGS)
const theme = computed<UserSettings['theme']>(() => userSettings.store.value.theme)
const src = computed(() => {
  let image = isNight ? 'background-night.webp' : 'background.webp'

  switch (theme.value) {
    case 'day':
      image = 'background.webp'
      break

    case 'night':
      image = 'background-night.webp'
      break

    case 'auto':
    default:
      image = isNight ? 'background-night.webp' : 'background.webp'
      break
  }

  return image
})
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter>
      <slot name="footer" />
    </AppFooter>
  </div>
  <BackgroundImage :src="`/img/${src}`" />
  <ClientOnly>
    <template #fallback>
      <BackgroundImage src="/img/background.webp" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.app {
  align-items: start;
  display: grid;
  grid-auto-flow: row;
  grid-template:
    'header' 1fr
    'main' 1fr
    'footer' 1fr / 1fr;
  height: 100%;
}

main {
  grid-area: main;
  height: 100%;
  justify-self: center;
  margin-bottom: var(--spacing-medium);
  width: 100%;
}

@media (width > 412px) {
  main {
    max-width: var(--width-max);
  }
}
</style>
