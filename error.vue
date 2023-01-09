<template>
	<NuxtLayout>
		<h1>{{ error.message }}</h1>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { H3Error } from 'h3'

defineProps<{
	error: H3Error
}>()
</script>
