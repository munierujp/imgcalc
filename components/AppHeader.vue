<template>
  <v-app-bar class="app-header bg-grey-darken-4 text-grey-lighten-5">
    <v-app-bar-title :text="config.appName" />
    <v-btn
      icon
      href="https://twitter.com/munieru_jp"
      target="_blank"
    >
      <v-icon icon="mdi-twitter" />
    </v-btn>
    <v-btn
      icon
      href="https://github.com/munierujp/imgcalc"
      target="_blank"
    >
      <v-icon icon="mdi-github" />
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
const config = useAppConfig()
</script>
