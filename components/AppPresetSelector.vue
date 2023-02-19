<script lang="ts" setup>
import type { Preset } from '../types/Preset';

const props = defineProps({
  items: {
    type: Array as PropType<Preset[]>,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Object as PropType<Preset>,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Preset): void
}>();

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
    :label="label"
    :items="items"
    item-title="name"
    item-value="key"
    return-object
    v-model="value"
  />
</template>
