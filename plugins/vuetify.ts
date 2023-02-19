import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  aliases,
  mdi
} from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      aliases,
      defaultSet: 'mdi',
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'dark'
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
