<script lang="ts" setup>
import type { Preset } from '../types/Preset'

const props = defineProps<{
  presets: Preset[]
  label: string
  modelValue: Preset
}>()

const emit = defineEmits<{(e: 'update:modelValue', value: Preset): void}>()

const value = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <v-select
    v-model="value"
    :label="label"
    :items="presets"
    item-title="name"
    item-value="key"
    return-object
    variant="underlined"
  />
</template>
