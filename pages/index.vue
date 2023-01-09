<template>
	<BasePlayer :sources="STREAM_SOURCES" controls />
	<div v-if="pending">Loading...</div>
	<template v-if="playlist">
		<BasePlaylist :data="playlist" />
	</template>
	<div v-else>SOME ERROR OCCURED</div>
</template>

<script setup lang="ts">
import { STREAM_SOURCES } from '~~/config'

const { pending, data: playlist } = await useFetch('/api/v1/playlist')
</script>
