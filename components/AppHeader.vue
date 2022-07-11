<template>
  <v-app-bar
    class="app-header grey--text text--lighten-5"
    color="grey darken-4"
    dark
    app
  >
    <v-toolbar-title>{{ $t('APP_NAME') }}</v-toolbar-title>
    <v-spacer />
    <v-flex xs4 sm2 md2 lg1>
      <app-language-switcher />
    </v-flex>
  </v-app-bar>
</template>

<script>
import AppLanguageSwitcher from '~/components/AppLanguageSwitcher'

export default {
  components: {
    AppLanguageSwitcher
  }
}
</script>
