<template>
	<main>
		<slot />
	</main>
</template>

<style scoped>
main {
	background: var(--background-color-main) url('/img/background.webp') center /
		cover fixed;
	height: 100%;
	overflow: auto;
}
</style>
