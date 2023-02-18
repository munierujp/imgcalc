<template>
  <v-layout column>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs8 sm4 md4 lg2 xl2>
          <v-select
            v-model="preset"
            :items="presets"
            label="preset"
            @change="presetHasChanged"
            item-title="label"
            item-value="value"
            return-object
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="widthRatio"
            label="width ratio"
            @update:modelValue="widthRatioHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="heightRatio"
            label="height ratio"
            @update:modelValue="heightRatioHasChanged"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout row justify-center>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="width"
            label="width"
            @update:modelValue="widthHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="height"
            label="height"
            @update:modelValue="heightHasChanged"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import type { Preset } from '../types/Preset'

export default {
  data: () => {
    const config = useAppConfig()
    const presets = config.presets
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
    presetHasChanged (preset: Preset) {
      const { width, widthRatio, height, heightRatio } = preset
      this.width = width
      this.widthRatio = widthRatio
      this.height = height
      this.heightRatio = heightRatio
    },
    widthHasChanged (width: number) {
      this.height = width * (this.heightRatio / this.widthRatio)
    },
    widthRatioHasChanged (widthRatio: number) {
      this.width = this.height * (widthRatio / this.heightRatio)
    },
    heightHasChanged (height: number) {
      this.width = height * (this.widthRatio / this.heightRatio)
    },
    heightRatioHasChanged (heightRatio: number) {
      this.height = this.width * (heightRatio / this.widthRatio)
    }
  }
}
</script>
