<template>
  <v-app-bar
    class="app-header grey--text text--lighten-5"
    color="grey darken-4"
    dark
    app
  >
    <v-toolbar-title>{{ $t('APP_NAME') }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// TODO: TS化

import AppLanguageSwitcher from '~/components/AppLanguageSwitcher'

export default {
  components: {
    AppLanguageSwitcher
  }
}
</script>
