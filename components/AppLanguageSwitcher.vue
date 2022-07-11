<template>
  <v-select
    :value="currentLocale"
    :items="locales"
    :label="$t('LANGUAGE')"
    @change="localeHasChanged"
    item-text="label"
    item-value="code"
    return-object
    single-line
  />
</template>

<script>
export default {
  computed: {
    locales () {
      return this.$i18n.locales
    },
    currentLocaleCode () {
      return this.$i18n.locale
    },
    currentLocale () {
      return this.locales.find(locale => locale.code === this.currentLocaleCode)
    }
  },
  methods: {
    localeHasChanged (locale) {
      const path = this.switchLocalePath(locale.code)
      this.$router.push(path)
    }
  }
}
</script>
