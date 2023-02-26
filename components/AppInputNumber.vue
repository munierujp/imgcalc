<script lang="ts" setup>
const props = defineProps<{
  label: string
  modelValue: number
}>()

const emit = defineEmits<{(e: 'update:modelValue', value: number): void}>()

const value = computed<string>({
  get () {
    return String(props.modelValue)
  },
  set (value) {
    emit('update:modelValue', Number(value))
  }
})
</script>

<template>
  <v-text-field
    v-model="value"
    type="number"
    inputmode="numeric"
    min="0"
    :label="label"
    variant="underlined"
  />
</template>
