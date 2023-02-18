<template>
  <v-app id="app">
    <AppHeader />
    <v-main>
      <v-container
        grid-list-xl
        text-xs-center
      >
        <slot />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
// TODO: TS化

export default {
  head () {
    return {
      title: 'imgcalc',
      meta: [
        { hid: 'description', name: 'description', content: 'Web app for calculating image size from aspect ratio' },
        { hid: 'og:title', property: 'og:title', content: 'imgcalc' },
        { hid: 'og:description', property: 'og:description', content: 'Web app for calculating image size from aspect ratio' }
      ]
    }
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
