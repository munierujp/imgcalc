<template>
  <v-text-field
    v-model.number="computedValue"
    :label="label"
    :min="min"
    type="number"
  />
</template>

<script lang="ts">
export default {
  props: {
    value: {
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
    computedValue: {
      get () {
        return this.value
      },
      set (value: unknown) {
        const number = typeof value === 'number' ? value : this.min
        this.$emit('input', number)
      }
    }
  }
}
</script>
