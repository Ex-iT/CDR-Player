<script setup lang="ts">
import isItNight from '@/lib/isItNight'
import { STORE_USER_SETTINGS } from '@/config'
import type { UserSettings } from '@/types/sharedTypes'

const isNight = isItNight()
const userSettings = useWebStorage(STORE_USER_SETTINGS)
const theme = computed<UserSettings['theme']>(() => userSettings.store.value.theme)

function getBackgroundImage(isNight: boolean, theme: UserSettings['theme']) {
  let image = isNight ? 'background-night.webp' : 'background.webp'

  switch (theme) {
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
}

const backgroundSrc = computed(() => getBackgroundImage(isNight, theme.value))
</script>

<template>
  <ClientOnly>
    <BackgroundImage :src="`/img/${backgroundSrc}`" />
    <template #fallback>
      <BackgroundImage src="/img/background.webp" />
    </template>
  </ClientOnly>
</template>
