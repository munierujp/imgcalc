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
