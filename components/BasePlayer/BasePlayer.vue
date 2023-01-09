<template>
	<audio @pause="paused" v-bind="$attrs">
		<source v-for="{ src, type } in sources" :src="src" :type="type" />
	</audio>
</template>

<script setup lang="ts">
interface Props {
	sources: Array<{ src: string; type: string }>
}

defineProps<Props>()

function paused({ target }: Event) {
	// Make the player actually stop downloading
	// when the pause button is clicked
	const audio = target as HTMLAudioElement
	audio.src = ''
	audio.src = audio.currentSrc
}
</script>
