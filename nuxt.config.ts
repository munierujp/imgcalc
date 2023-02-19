// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'imgcalc',
      meta: [
        {
          name: 'description',
          content: 'Web app for calculating image size from aspect ratio'
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
          href: '/favicon-256x256.png',
          sizes: '256x256'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/android-chrome-192x192.png',
          sizes: '192x192'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon-180x180.png',
          sizes: '180x180'
        },
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
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
