<template>
  <div class="app">
    <ApplicationHeader />
    <main>
      <slot />
    </main>
    <ApplicationFooter>
      <slot name="footer" />
    </ApplicationFooter>
  </div>
  <ApplicationBackground />
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
