<script lang="ts" setup>
const props = defineProps<{
  label: string
  modelValue: number
}>()

const emit = defineEmits<{(e: 'update:modelValue', value: number): void}>()

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
  <v-text-field
    v-model.number="value"
    type="number"
    inputmode="numeric"
    min="1"
    :label="label"
    variant="underlined"
  />
</template>
