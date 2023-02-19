<template>
  <v-container>
    <v-row>
      <v-col>
        <AppPresetSelector
          label="preset"
          :items="presets"
          v-model="preset"
          @update:model-value="handlePresetUpdated"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppInputNumber
          label="width ratio"
          v-model="widthRatio"
          @update:modelValue="handleWidthRatioUpdated"
        />
      </v-col>
      <v-col>
        <AppInputNumber
          label="height ratio"
          v-model="heightRatio"
          @update:modelValue="handleHeightRatioUpdated"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppInputNumber
          label="width"
          v-model="width"
          @update:modelValue="handleWidthUpdated"
        />
      </v-col>
      <v-col>
        <AppInputNumber
          label="height"
          v-model="height"
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
