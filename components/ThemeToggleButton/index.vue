<script setup lang="ts">
import type { Button as ToggleButton } from '@/components/application/ToggleButtons/index.vue'
import type { UserSettings } from '@/types/sharedTypes'
import { STORE_USER_SETTINGS } from '@/config'
import IcBaselineBrightness6 from '@/icons/IcBaselineBrightness6.vue'
import IcBaselineNightlight from '@/icons/IcBaselineNightlight.vue'
import IcBaselineWbSunny from '@/icons/IcBaselineWbSunny.vue'

const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS)
const activeTheme = computedAsync(() => userSettings.store.value.theme, 'auto')

function setTheme(theme: UserSettings['theme']) {
  userSettings.set({
    ...(userSettings.store.value as UserSettings),
    theme,
  })
}

const buttons = computed<ToggleButton[]>(() => [
  {
    label: 'Auto',
    icon: IcBaselineBrightness6,
    data: {
      theme: 'auto',
    },
    isActive: activeTheme.value === 'auto',
  },
  {
    label: 'Day',
    icon: IcBaselineWbSunny,
    data: {
      theme: 'day',
    },
    isActive: activeTheme.value === 'day',
  },
  {
    label: 'Night',
    icon: IcBaselineNightlight,
    data: {
      theme: 'night',
    },
    isActive: activeTheme.value === 'night',
  },
])

function handleClick(button: ToggleButton) {
  setTheme(button.data?.theme ?? 'auto')
}
</script>

<template>
  <ApplicationToggleButtons :buttons="buttons" @click="handleClick">
    <template #default="{ button }">
      {{ button.label }}
    </template>
  </ApplicationToggleButtons>
</template>
