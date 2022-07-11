import fs from 'fs'
import { URL } from 'url'
import sass from 'sass'
import fiber from 'fibers'
import colors from 'vuetify/es5/util/colors'
import i18n from './nuxt-i18n.config'
import lang from './lang/en'

const DEFAULT_LOCALE = i18n.defaultLocale
const APP_NAME = lang.APP_NAME
const APP_DESCRIPTION = lang.APP_DESCRIPTION

const config = loadConfig('./config.json')
const { BASE_DIR, TWITTER_ID, OG_IMAGE_PATH, ORIGIN } = config
const BASE_URL = new URL(BASE_DIR, ORIGIN).toString()
const OG_IMAGE_URL = new URL(OG_IMAGE_PATH, BASE_URL).toString()
const TWITTER_ACCOUNT = `@${TWITTER_ID}`

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: APP_DESCRIPTION },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: APP_NAME },
      { hid: 'og:description', property: 'og:description', content: APP_DESCRIPTION },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:image', property: 'og:image', content: OG_IMAGE_URL },
      { hid: 'og:image:width', property: 'og:image:width', content: '256' },
      { hid: 'og:image:height', property: 'og:image:height', content: '256' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: TWITTER_ACCOUNT }
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
    extend (config, ctx) {
    },
    loaders: {
      scss: {
        implementation: sass,
        sassOptions: {
          fiber
        }
      }
    }
  },
  /*
  ** router config
  */
  router: {
    base: BASE_DIR
  },
  /*
  ** PWA config
  */
  manifest: {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    lang: DEFAULT_LOCALE
  },
  meta: {
    author: TWITTER_ID
  }
}

function loadConfig (filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf-8')
    return JSON.parse(data)
  } catch (ignored) {
    const {
      BASE_DIR,
      TWITTER_ID,
      OG_IMAGE_PATH,
      ORIGIN
    } = process.env
    return {
      BASE_DIR,
      TWITTER_ID,
      OG_IMAGE_PATH,
      ORIGIN
    }
  }
}
