<script lang="ts" setup>
import type { Preset } from '../types/Preset'

const config = useAppConfig()
const presets = ref(config.presets)
const preset = ref(presets.value[0])
const width = ref(preset.value.width)
const widthRatio = ref(preset.value.widthRatio)
const height = ref(preset.value.height)
const heightRatio = ref(preset.value.heightRatio)

const handleWidthUpdated = (width: number) => {
  height.value = Math.ceil(width * (heightRatio.value / widthRatio.value))
}

const handleWidthRatioUpdated = (widthRatio: number) => {
  width.value = Math.ceil(height.value * (widthRatio / heightRatio.value))
}

const handleHeightUpdated = (height: number) => {
  width.value = Math.ceil(height * (widthRatio.value / heightRatio.value))
}

const handleHeightRatioUpdated = (heightRatio: number) => {
  height.value = Math.ceil(width.value * (heightRatio / widthRatio.value))
}

const handlePresetUpdated = (preset: Preset) => {
  width.value = preset.width
  widthRatio.value = preset.widthRatio
  height.value = preset.height
  heightRatio.value = preset.heightRatio
}
</script>

<template>
  <v-main id="main">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="2"
        >
          <AppPresetSelector
            v-model="preset"
            :presets="presets"
            label="preset"
            @update:model-value="handlePresetUpdated"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="6"
          sm="3"
          md="2"
          lg="2"
          xl="1"
        >
          <AppInputNumber
            v-model="widthRatio"
            label="width ratio"
            @update:model-value="handleWidthRatioUpdated"
          />
        </v-col>
        <v-col
          cols="6"
          sm="3"
          md="2"
          lg="2"
          xl="1"
        >
          <AppInputNumber
            v-model="heightRatio"
            label="height ratio"
            @update:model-value="handleHeightRatioUpdated"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="6"
          sm="3"
          md="2"
          lg="2"
          xl="1"
        >
          <AppInputNumber
            v-model="width"
            label="width"
            @update:model-value="handleWidthUpdated"
          />
        </v-col>
        <v-col
          cols="6"
          sm="3"
          md="2"
          lg="2"
          xl="1"
        >
          <AppInputNumber
            v-model="height"
            label="height"
            @update:model-value="handleHeightUpdated"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
