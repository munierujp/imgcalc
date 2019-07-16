<template>
  <v-select
    :value="currentLocale"
    :items="locales"
    item-text="label"
    item-value="code"
    :label="$t('LANGUAGE')"
    return-object
    single-line
    @change="localeHasChanged"
  />
</template>

<script>
export default {
  computed: {
    locales() {
      return this.$i18n.locales
    },
    currentLocaleCode() {
      return this.$i18n.locale
    },
    currentLocale() {
      return this.locales.find(locale => locale.code === this.currentLocaleCode)
    }
  },
  methods: {
    localeHasChanged(locale) {
      const path = this.switchLocalePath(locale.code)
      this.$router.push(path)
    }
  }
}
</script>
