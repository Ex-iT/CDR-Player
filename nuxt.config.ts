import { CDR_BASE_URL } from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-29',

  devtools: { enabled: false },

  app: {
    head: {
      title: 'CDR Player - Out of love for Cool Dance Radio ❤',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Only the best organic & downtempo melodic house',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#2d89ef' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
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
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-security',
  ],

  typescript: {
    typeCheck: true,
    strict: true,
  },

  googleFonts: {
    download: true,
    inject: true,
    display: 'swap',
    families: {
      Oswald: true,
    },
  },
})
