<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const icon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny')

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-btn
    title="toggle theme"
    :icon="icon"
    @click="toggleTheme"
  />
</template>
