<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  }
})

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
    min="1"
    :label="label"
    variant="underlined"
  />
</template>
