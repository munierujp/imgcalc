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
  </v-app>
</template>

<style lang="scss">
#app {
  background-color: #fafafa;
  color: #212121;
  font-family: Roboto, "Noto Sans JP", sans-serif;
}
</style>
