<script setup lang="ts">
import type { Button as ToggleButton } from '@/components/application/ToggleButtons/index.vue'
import type { UserSettings } from '@/types/sharedTypes'
import { STORE_USER_SETTINGS } from '@/config'
import IcBaselineSwipeLeft from '~/icons/IcBaselineSwipeLeft.vue'
import IcBaselineSwipeRight from '~/icons/IcBaselineSwipeRight.vue'

const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS)
const leftHanded = computedAsync(() => userSettings.store.value.leftHanded, false)

function setHand(leftHanded: UserSettings['leftHanded']) {
  userSettings.set({
    ...(userSettings.store.value as UserSettings),
    leftHanded,
  })
}

const buttons = computed<ToggleButton[]>(() => [
  {
    label: 'Left',
    data: {
      leftHanded: true,
    },
    icon: IcBaselineSwipeLeft,
    isActive: leftHanded.value,
  },
  {
    label: 'Right',
    data: {
      leftHanded: false,
    },
    icon: IcBaselineSwipeRight,
    isActive: !leftHanded.value,
  },
])

function handleClick(button: ToggleButton) {
  setHand(button.data?.leftHanded ?? false)
}
</script>

<template>
  <ApplicationToggleButtons :buttons="buttons" @click="handleClick">
    <template #default="{ button }">
      {{ button.label }}
    </template>
  </ApplicationToggleButtons>
</template>
