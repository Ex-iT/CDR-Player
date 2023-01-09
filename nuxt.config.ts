import { CDR_BASE_URL } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Cool Dance Radio Player - Out of love for Cool Dance Radio ❤',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'msapplication-TileColor', content: '#2d89ef' },
				{ name: 'theme-color', content: '#ffffff' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png',
				},
				{ rel: 'manifest', href: '/site.webmanifest' },
				{
					rel: 'mask-icon',
					href: '/safari-pinned-tab.svg',
					color: '#000000',
				},
				{
					rel: 'preconnect',
					href: CDR_BASE_URL,
				},
			],
		},
	},

	css: ['@/assets/css/main.css'],

	typescript: {
		typeCheck: true,
		strict: true,
	},
})
