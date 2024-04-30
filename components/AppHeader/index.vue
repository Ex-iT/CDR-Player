<template>
  <header>
    <NuxtLink to="/">
      <h1>
        <span>Cool Dance Radio</span>
        <span>Player</span>
      </h1>
    </NuxtLink>
    <Menu />
  </header>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  grid-area: header;
  justify-content: space-between;
  margin: 0 auto var(--spacing-medium);
  padding-right: 1rem;
  padding-top: var(--spacing-medium);
  width: 100%;
}

@media (width > 412px) {
  header {
    max-width: var(--width-max);
    padding-right: var(--spacing-larger);
  }
}

a {
  transform-origin: center left;
}

a:focus,
a:hover {
  transform: scale(1.02);
}

h1 {
  background-color: rgb(var(--color-text));
  border-image-source: linear-gradient(to top right, var(--gradient-stops));
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

span {
  background-color: unset;
  padding: 0.4rem 0.4rem 0;
  transition: color var(--transition);
}

span + span {
  align-self: flex-end;
  padding-bottom: 0.4rem;
}

a:focus span,
a:hover span {
  color: rgb(var(--color-highlight));
}
</style>
