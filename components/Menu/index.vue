<script setup lang="ts">
async function handleClick() {
  // console.log('@TODO: implement this')
  await navigateTo('/about')
}
</script>

<template>
  <button type="button" @click="handleClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
      <path fill="currentColor" d="M0 0h17l-.28 2H0zm0 6h16.15l-.28 2H0zm0 6h15.31l-.28 2H0z" />
    </svg>
  </button>
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
</style>
