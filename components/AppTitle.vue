<template>
  <h1 class="app-title">
    {{ $t('APP_NAME') }}
  </h1>
</template>

<style lang="scss" scoped>
$relative-max-width: 600px;
$ratio: 0.25;
$relative-font-size: 100vw * $ratio;
$absolute-font-size: $relative-max-width * $ratio;

.app-title {
  overflow-wrap: break-word;
  font-size: $absolute-font-size;
}

@media (max-width: $relative-max-width) {
  .app-title {
    font-size: $relative-font-size;
  }
}
</style>
