import type { VuetifyOptions } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {
  aliases,
  mdi
} from 'vuetify/iconsets/mdi'

export const config: VuetifyOptions = {
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
}
