<template>
  <v-app id="app">
    <v-content>
      <v-container
        grid-list-xl
        text-xs-center
      >
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter'

export default {
  head() {
    const APP_NAME = this.$t('APP_NAME')
    const APP_DESCRIPTION = this.$t('APP_DESCRIPTION')
    const { meta } = this.$nuxtI18nSeo()
    return {
      meta: [
        { hid: 'description', name: 'description', content: APP_DESCRIPTION },
        { hid: 'og:title', property: 'og:title', content: APP_NAME },
        { hid: 'og:description', property: 'og:description', content: APP_DESCRIPTION },
        ...meta
      ]
    }
  },
  components: {
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
  color: #212121;
  font-family: Roboto, "Noto Sans JP", sans-serif;
}
</style>
