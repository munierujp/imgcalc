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
          <AppInput
            v-model="widthRatio"
            label="width ratio"
            @input="widthRatioHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="heightRatio"
            label="height ratio"
            @input="heightRatioHasChanged"
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
            @input="widthHasChanged"
          />
        </v-flex>
        <v-flex xs4 sm2 md2 lg1 xl1>
          <AppInput
            v-model="height"
            label="height"
            @input="heightHasChanged"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
// TODO: TS化

const presets = [
  {
    label: '4:3 (400x300)',
    width: 400,
    widthRatio: 4,
    height: 300,
    heightRatio: 3
  },
  {
    label: '4:3 (800x600)',
    width: 800,
    widthRatio: 4,
    height: 600,
    heightRatio: 3
  },
  {
    label: '4:3 (1200x900)',
    width: 1200,
    widthRatio: 4,
    height: 900,
    heightRatio: 3
  },
  {
    label: '16:9 (1600x900)',
    width: 1600,
    widthRatio: 16,
    height: 900,
    heightRatio: 9
  },
  {
    label: '4:3 (1600x1200)',
    width: 1600,
    widthRatio: 4,
    height: 1200,
    heightRatio: 3
  },
  {
    label: '4:3 (2000x1500)',
    width: 2000,
    widthRatio: 4,
    height: 1500,
    heightRatio: 3
  },
  {
    label: '4:3 (2400x1800)',
    width: 2400,
    widthRatio: 4,
    height: 1800,
    heightRatio: 3
  },
  {
    label: '4:3 (2800x2100)',
    width: 2800,
    widthRatio: 4,
    height: 2100,
    heightRatio: 3
  },
  {
    label: '16:9 (3200x1800)',
    width: 3200,
    widthRatio: 16,
    height: 1800,
    heightRatio: 9
  },
  {
    label: '4:3 (3200x2400)',
    width: 3200,
    widthRatio: 4,
    height: 2400,
    heightRatio: 3
  },
  {
    label: '4:3 (3600x2700)',
    width: 3600,
    widthRatio: 4,
    height: 2700,
    heightRatio: 3
  },
  {
    label: '4:3 (4000x3000)',
    width: 4000,
    widthRatio: 4,
    height: 3000,
    heightRatio: 3
  }
]

export default {
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