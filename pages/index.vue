<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="preset"
          :items="presets"
          label="preset"
          item-title="label"
          item-value="value"
          return-object
          @update:model-value="handlePresetUpdated"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppInputNumber
          v-model="widthRatio"
          label="width ratio"
          @update:modelValue="handleWidthRatioUpdated"
        />
      </v-col>
      <v-col>
        <AppInputNumber
          v-model="heightRatio"
          label="height ratio"
          @update:modelValue="handleHeightRatioUpdated"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppInputNumber
          v-model="width"
          label="width"
          @update:modelValue="handleWidthUpdated"
        />
      </v-col>
      <v-col>
        <AppInputNumber
          v-model="height"
          label="height"
          @update:modelValue="handleHeightUpdated"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// TODO: setupにする

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
    handleHeightRatioUpdated (heightRatio: number) {
      this.height = this.width * (heightRatio / this.widthRatio)
    },
    handleHeightUpdated (height: number) {
      this.width = height * (this.widthRatio / this.heightRatio)
    },
    handlePresetUpdated (preset: Preset) {
      this.width = preset.width
      this.widthRatio = preset.widthRatio
      this.height = preset.height
      this.heightRatio = preset.heightRatio
    },
    handleWidthRatioUpdated (widthRatio: number) {
      this.width = this.height * (widthRatio / this.heightRatio)
    },
    handleWidthUpdated (width: number) {
      this.height = width * (this.heightRatio / this.widthRatio)
    }
  }
}
</script>
