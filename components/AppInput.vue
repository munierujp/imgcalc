<template>
  <v-text-field
    v-model.number="value"
    :label="label"
    :min="min"
    type="number"
  />
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      default: 1
    }
  },
  computed: {
    value: {
      get () {
        return this.modelValue
      },
      set (value: unknown) {
        const number = typeof value === 'number' ? value : this.min
        this.$emit('update:modelValue', number)
      }
    }
  }
}
</script>
