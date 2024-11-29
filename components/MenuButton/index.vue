<script setup lang="ts">
import IcBaselineMenu from '@/icons/IcBaselineMenu.vue'
import PopOverMenu from './PopOverMenu.vue'
// import { STORE_USER_SETTINGS } from '@/config'
// import type { UserSettings } from '@/types/sharedTypes'

// const userSettings = useWebStorage<UserSettings>(STORE_USER_SETTINGS)
// const isLeftHanded = computed(() => userSettings.store.value.leftHanded)
// const theme = computed(() => userSettings.store.value.theme)

// async function handleClick() {
// userSettings.set<UserSettings>({
//   leftHanded: !isLeftHanded.value,
//   theme: theme.value === 'night' ? 'day' : 'night',
// })
// }
</script>

<template>
  <div>
    <button id="anchor" type="button" popovertarget="main">
      <span class="sr-only">
        Menu
      </span>
      <IcBaselineMenu />
    </button>
    <PopOverMenu />
  </div>
</template>

<style scoped>
button {
  background-color: rgb(var(--color-highlight) / 50%);
  border: none;
  border-radius: var(--border-radius);
  color: rgb(var(--color-foreground));
  cursor: pointer;
  height: 48px;
  transform-origin: center right;
  transition: background-color var(--transition), transform var(--transition);
  width: 48px;
}

button:focus,
button:hover {
  background-color: rgb(var(--color-highlight));
  transform: scale(1.08);
}

svg {
  height: auto;
  width: 100%;
}

[popovertarget="main"] {
  anchor-name: --anchor;
}
</style>
