import fs from 'fs'
import colors from 'vuetify/es5/util/colors'
import i18n from './nuxt-i18n.config'
import lang from './lang/ja'

const config = loadConfig('./config.json')
const { BASE_DIR } = config

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: lang.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: lang.APP_DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-256x256.png', sizes: '256x256' },
      { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png', sizes: '180x180' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Noto+Sans+JP'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    ['nuxt-i18n', i18n]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** router config
  */
  router: {
    base: BASE_DIR
  }
}

function loadConfig(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(data)
  } catch (ignored) {
    const {
      BASE_DIR
    } = process.env
    return {
      BASE_DIR
    }
  }
}
