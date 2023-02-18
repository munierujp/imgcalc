// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
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