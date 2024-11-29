<script setup lang="ts">
import type { UserSettings } from '@/types/sharedTypes'
import { STORE_USER_SETTINGS } from '@/config'
import isItNight from '@/lib/isItNight'

const isNight = isItNight()
const initialUserSettings: UserSettings = {
  leftHanded: false,
  theme: 'auto',
}
const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS, initialUserSettings)
const isLeftHanded = computed(() => userSettings.store.value.leftHanded)
const theme = computed(() => userSettings.store.value.theme)
const bodyClasses = computed(() => `${theme.value ? `theme-${theme.value}` : ''} ${isNight ? 'is-night' : 'is-day'} ${isLeftHanded.value ? 'left-handed' : ''}`)

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
