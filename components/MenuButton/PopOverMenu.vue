<script lang="ts" setup>
const refNav = ref<HTMLDivElement | null>(null)

function closePopover(event: Event) {
  event.stopPropagation()
  refNav.value?.hidePopover()
}
</script>

<template>
  <nav id="main" ref="refNav" role="menu" popover="auto" anchor="anchor">
    <ApplicationCard>
      <ul>
        <li>
          <p>Theme</p>
          <ThemeToggleButton />
        </li>
        <li>
          <p>Player button</p>
          <HandToggleButton />
        </li>
        <li>
          <NuxtLink to="/about" @click="closePopover">About CDR Player</NuxtLink>
        </li>
      </ul>
    </ApplicationCard>
  </nav>
</template>

<style scoped>
#main {
  background-color: transparent;
  border: none;
  padding: 0;
  position-anchor: --anchor;
}

[popover] button {
    align-items: center;
    aspect-ratio: auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 0.5rem;
    width: 100%;
  }

  [popover] {
    --speed: 0.2s;

    inset: unset;
    opacity: 0;
    position-try-fallbacks: flip-block, flip-inline;
    position-try-options: flip-block, flip-inline;
    /* stylelint-disable-next-line declaration-property-value-no-unknown */
    right: anchor(right);
    scale: 0.9;
    /* stylelint-disable-next-line declaration-property-value-no-unknown */
    top: anchor(bottom);
    transition:
      display var(--speed) allow-discrete,
      overlay var(--speed) allow-discrete,
      opacity var(--speed),
      scale var(--speed);
  }

  [popover]:popover-open {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    [popover]:popover-open {
      opacity: 0;
      scale: 0.9;
    }
  }

[popover]::backdrop {
  backdrop-filter: blur(var(--blur-medium));
}

ul {
  padding: 0 var(--spacing-medium);

  @media (width > 412px) {
    padding: 0;
  }
}

li {
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: var(--spacing-large);
  }
}
</style>
