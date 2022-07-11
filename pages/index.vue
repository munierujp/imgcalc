<template>
  <v-layout column>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs8 sm4 md4 lg2 xl2>
          <v-select
            v-model="preset"
            :items="presets"
            :label="$t('PRESET')"
            @change="presetHasChanged"
            item-text="label"
            item-value="value"
            return-object
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <app-input
            v-model="widthRatio"
            :label="$t('WIDTH_RATIO')"
            @input="widthRatioHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <app-input
            v-model="heightRatio"
            :label="$t('HEIGHT_RATIO')"
            @input="heightRatioHasChanged"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <app-input
            v-model="width"
            :label="$t('WIDTH')"
            @input="widthHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <app-input
            v-model="height"
            :label="$t('HEIGHT')"
            @input="heightHasChanged"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import presets from '~/modules/presets'
import AppInput from '~/components/AppInput'

export default {
  components: {
    AppInput
  },
  data: () => {
    const preset = presets[0]
    const { width, widthRatio, height, heightRatio } = preset
    return {
      width,
      widthRatio,
      height,
      heightRatio,
      preset,
      presets
    }
  },
  methods: {
    presetHasChanged (preset) {
      const { width, widthRatio, height, heightRatio } = preset
      this.width = width
      this.widthRatio = widthRatio
      this.height = height
      this.heightRatio = heightRatio
    },
    widthHasChanged (width) {
      this.height = width * (this.heightRatio / this.widthRatio)
    },
    widthRatioHasChanged (widthRatio) {
      this.width = this.height * (widthRatio / this.heightRatio)
    },
    heightHasChanged (height) {
      this.width = height * (this.widthRatio / this.heightRatio)
    },
    heightRatioHasChanged (heightRatio) {
      this.height = this.width * (heightRatio / this.widthRatio)
    }
  }
}
</script>
