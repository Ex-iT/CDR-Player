<script setup lang="ts">
import isItNight from '@/lib/isItNight'
import { STORE_USER_SETTINGS } from '@/config'
import type { UserSettings } from '@/types/sharedTypes'

const isNight = isItNight()
const initialUserSettings: UserSettings = {
  leftHanded: false,
  theme: 'auto',
}
const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS, initialUserSettings)
const isLeftHanded = userSettings.get('leftHanded')
const theme = userSettings.get<UserSettings>('theme')

const bodyClasses = `${theme ? `theme-${theme}` : ''} ${isNight ? 'is-night' : 'is-day'} ${isLeftHanded ? 'left-handed' : ''}`

useHead({
  bodyAttrs: {
    class: bodyClasses,
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
