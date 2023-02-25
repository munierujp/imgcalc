import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { config } from '../config/vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify(config)
  nuxtApp.vueApp.use(vuetify)
})
