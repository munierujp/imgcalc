const APP_NAME = 'imgcalc'
const APP_DESCRIPTION = 'Web app for calculating image size from aspect ratio'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: APP_NAME,
      meta: [
        {
          name: 'description',
          content: APP_DESCRIPTION
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: APP_NAME
        },
        {
          property: 'og:description',
          content: APP_DESCRIPTION
        },
        {
          property: 'og:url',
          content: 'https://imgcalc.munieru.app/'
        },
        {
          property: 'og:image',
          content: 'https://imgcalc.munieru.app/icon.png'
        },
        {
          property: 'og:image:width',
          content: '1024'
        },
        {
          property: 'og:image:height',
          content: '1024'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@munieru_jp'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/android-chrome-192x192.png',
          sizes: '192x192'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180'
        }
      ]
    }
  },
  build: {
    transpile: [
      'vuetify'
    ]
  },
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@vite-pwa/nuxt'
  ],
  typescript: {
    strict: true
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  pwa: {
    manifest: {
      name: APP_NAME,
      short_name: APP_NAME,
      description: APP_DESCRIPTION,
      theme_color: '#212121',
      background_color: '#121212',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      display: 'standalone'
    }
  }
})
