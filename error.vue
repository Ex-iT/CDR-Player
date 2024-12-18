<script setup lang="ts">
import type { H3Error } from 'h3'

defineProps<{
  error: H3Error
}>()
</script>

<template>
  <NuxtLayout name="main">
    <ApplicationCard>
      <h2><span>Nothing to see here...</span></h2>
      <p>{{ error.message }}</p>
    </ApplicationCard>
  </NuxtLayout>
</template>
