<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
section {
  backdrop-filter: blur(var(--blur-medium));
  background-color: rgb(var(--color-foreground) / 50%);
  box-shadow: var(--shadow);
  margin-bottom: var(--spacing-medium);
  padding: 1rem;
  position: relative;
  width: 100%;
}

section::before {
  border-image-slice: 1;
  border-image-source: linear-gradient(to top right, var(--gradient-stops));
  border-style: solid;
  border-width: 1px;
  content: '';
  inset: 0;
  position: absolute;
  z-index: -1;
}

@media (width > 412px) {
  section {
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    padding: 1.5rem;
  }
}

p:not(:last-child) {
  margin-bottom: var(--spacing-medium);
}
</style>
