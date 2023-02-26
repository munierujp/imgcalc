<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const themeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny')
const handleClickThemeButton = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar>
    <v-app-bar-title text="imgcalc" />
    <v-btn
      title="toggle theme"
      :icon="themeIcon"
      @click="handleClickThemeButton"
    />
    <v-btn
      title="Twitter"
      icon="mdi-twitter"
      href="https://twitter.com/munieru_jp"
      target="_blank"
    />
    <v-btn
      title="GitHub"
      icon="mdi-github"
      href="https://github.com/munierujp/imgcalc"
      target="_blank"
    />
  </v-app-bar>
</template>
