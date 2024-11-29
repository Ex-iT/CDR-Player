<script setup lang="ts">
import { STORE_USER_SETTINGS } from '@/config'
import type { UserSettings } from '@/types/sharedTypes'
import IcBaselineWbSunny from '@/icons/IcBaselineWbSunny.vue'
import IcBaselineNightlight from '@/icons/IcBaselineNightlight.vue'
import IcBaselineBrightness6 from '@/icons/IcBaselineBrightness6.vue'

interface Button {
  label: string
  theme: UserSettings['theme']
  icon: any
}

const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS)
const activeTheme = computedAsync(() => userSettings.store.value.theme, 'auto')

function setTheme(theme: UserSettings['theme']) {
  userSettings.set({
    ...(userSettings.store.value as UserSettings),
    theme,
  })
}

const buttons: Button[] = [
  {
    label: 'Auto',
    icon: IcBaselineBrightness6,
    theme: 'auto',
  },
  {
    label: 'Day',
    icon: IcBaselineWbSunny,
    theme: 'day',
  },
  {
    label: 'Night',
    icon: IcBaselineNightlight,
    theme: 'night',
  },
]
</script>

<template>
  <div class="theme-toggle">
    <button
      v-for="button in buttons"
      :key="`button-${button.theme}`"
      :class="{ active: activeTheme === button.theme }"
      @click="setTheme(button.theme)"
    >
      <component :is="button.icon" />
      {{ button.label }}
    </button>
  </div>
</template>

<style scoped>
.theme-toggle {
  display: flex;
}

button {
  align-items: center;
  background-color: rgb(var(--color-foreground) / 40%);
  border: 1px solid rgb(var(--color-border));
  color: rgb(var(--color-text));
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: var(--spacing-small);
  padding: var(--spacing-medium) var(--spacing-large);
  transition:
      color var(--transition),
      background-color var(--transition);

  &:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  &.active {
    background-color: rgb(var(--color-highlight));
  }

  &:hover:not(.active) {
    background-color: rgb(var(--color-highlight) / 50%);
    color: rgb(var(--color-foreground));
  }
}

svg {
  font-size: var(--spacing-large);
}
</style>
