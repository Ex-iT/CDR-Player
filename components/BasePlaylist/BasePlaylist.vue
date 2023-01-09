<template>
	<pre>{{ playlist }}</pre>
</template>

<script setup lang="ts">
import { Playlist } from '~~/types/sharedTypes'

interface Props {
	data: Playlist
}

const props = defineProps<Props>()
const playlist = props.data
</script>
