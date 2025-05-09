<script setup lang="ts">
import type { UserSettings } from '@/types/sharedTypes'

export interface Button {
  label: string
  icon: any
  data: {
    theme?: UserSettings['theme']
    leftHanded?: UserSettings['leftHanded']
  }
  isActive: boolean
}

const props = withDefaults(defineProps<{
  buttons?: Button[]
}>(), {
  buttons: () => [],
})

const emits = defineEmits(['click'])

function handleClick(button: Button) {
  emits('click', button)
}
</script>

<template>
  <section>
    <button
      v-for="(button, index) in props.buttons"
      :key="`button-${button.label}-${index}`"
      :class="{ active: button.isActive }"
      @click="handleClick(button)"
    >
      <component :is="button.icon" />
      <slot :button="button" />
    </button>
  </section>
</template>

<style scoped>
section {
  display: flex;
}

button {
  align-items: center;
  background-color: rgb(var(--color-foreground) / 40%);
  border: 1px solid rgb(var(--color-border));
  border-left: none;
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
    border-left: 1px solid rgb(var(--color-border));
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
