<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <nuxt-picture
    :key="`picture-${src}`"
    :src="src"
    alt=""
    role="presentation"
    loading="lazy"
    decoding="async"
  />
</template>

<style scoped>
picture {
  inset: 0;
  pointer-events: none;
  position: fixed;
  z-index: -1;
}

picture :deep(img) {
  aspect-ratio: 4/3;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
