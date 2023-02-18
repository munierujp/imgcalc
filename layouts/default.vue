<template>
  <v-app id="app">
    <AppHeader />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  background-color: #fafafa;
  color: #212121;
}
</style>
