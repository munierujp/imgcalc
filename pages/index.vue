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
  height.value = width * (heightRatio.value / widthRatio.value)
}

const handleWidthRatioUpdated = (widthRatio: number) => {
  width.value = height.value * (widthRatio / heightRatio.value)
}

const handleHeightUpdated = (height: number) => {
  width.value = height * (widthRatio.value / heightRatio.value)
}

const handleHeightRatioUpdated = (heightRatio: number) => {
  height.value = width.value * (heightRatio / widthRatio.value)
}

const handlePresetUpdated = (preset: Preset) => {
  width.value = preset.width
  widthRatio.value = preset.widthRatio
  height.value = preset.height
  heightRatio.value = preset.heightRatio
}
</script>

<template>
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
          label="preset"
          :items="presets"
          v-model="preset"
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
          label="width ratio"
          v-model="widthRatio"
          @update:modelValue="handleWidthRatioUpdated"
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
          label="height ratio"
          v-model="heightRatio"
          @update:modelValue="handleHeightRatioUpdated"
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
          label="width"
          v-model="width"
          @update:modelValue="handleWidthUpdated"
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
          label="height"
          v-model="height"
          @update:modelValue="handleHeightUpdated"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
