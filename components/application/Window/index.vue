<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  closeTo?: string
}>(), {
  closeTo: '/',
})

const emit = defineEmits(['backdropClick', 'keyEsc'])

function handleClick({ target, currentTarget }: Event) {
  if (currentTarget === target) {
    emit('backdropClick')
  }
}

function handleEsc({ key }: KeyboardEvent) {
  if (key.toLowerCase() === 'escape') {
    emit('keyEsc')
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleEsc)
})
</script>

<template>
  <section class="window" @click.stop="handleClick">
    <article>
      <div class="header">
        <h2><span>{{ title }}</span></h2>
        <NuxtLink :to="closeTo" class="close">X</NuxtLink>
      </div>
      <ApplicationCard class="card">
        <div class="content scroll-shadows">
          <slot />
        </div>
      </ApplicationCard>
    </article>
  </section>
</template>

<style scoped>
.window {
  align-items: center;
  backdrop-filter: blur(var(--blur-medium));
  background-color: rgb(var(--color-background) / 60%);
  display: flex;
  height: 100%;
  inset: 0;
  justify-content: center;
  position: fixed;
  width: 100%;
}

.header {
  display: flex;
}

h2 {
  width: 100%;
}

.close {
  color: rgb(var(--color-foreground));
  display: inline-block;
  font-family: Oswald, Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  height: 100%;
  margin-left: auto;
  margin-right: 0;
  padding: 0 0.5rem;
  text-decoration: none;
  text-shadow: 0 0 var(--blur-medium) rgb(var(--color-foreground));
  transform: rotate(0deg);
  transition: transform var(--transition);
}

.close:hover {
  transform: rotate(180deg);
}

article {
  height: 100%;
  margin-top: calc(-1 * var(--spacing-large) * 4); /* Compensate for the footer */
  max-height: 50%;
  max-width: 800px;
  width: 100%;
}

.card {
  background-color: rgb(var(--color-foreground) / 70%);
  height: 100%;
  width: 100%;
}

.content {
  height: 100%;
  overflow: auto;
  padding: 0 1rem;
}

.scroll-shadows {
  background:
    linear-gradient(
      #bebfbf, /*  rgb(var(--color-foreground) / 70%) */
      rgb(255 255 255 / 0%)
    ) center top,

    linear-gradient(
      rgb(255 255 255 / 0%),
      #bebfbf /*  rgb(var(--color-foreground) / 70%) */
    ) center bottom,

    radial-gradient(
      farthest-side at 50% 0,
      rgb(0 0 0 / 20%),
      rgb(0 0 0 / 0%)
    ) center top,

    radial-gradient(
      farthest-side at 50% 100%,
      rgb(0 0 0 / 20%),
      rgb(0 0 0 / 0%)
    ) center bottom;
  background-attachment: local, local, scroll, scroll;
  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
}
</style>
