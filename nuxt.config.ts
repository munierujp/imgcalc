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
      ]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass'
  ],
  build: {
    transpile: [
      'vuetify'
    ]
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
