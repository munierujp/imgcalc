<template>
  <v-text-field
    type="number"
    min="1"
    :label="label"
    v-model="value"
  />
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value: number) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
