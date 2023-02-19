<template>
  <v-text-field
    type="number"
    :label="label"
    :min="min"
    v-model.number="value"
  />
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      default: 1
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
      set (value: unknown) {
        const number = typeof value === 'number' ? value : this.min
        this.$emit('update:modelValue', number)
      }
    }
  }
}
</script>
