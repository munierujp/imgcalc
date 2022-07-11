<template>
  <v-text-field
    v-model.number="computedValue"
    :label="label"
    :min="min"
    type="number"
  />
</template>

<script>
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
      set (value) {
        const num = isNumber(value) ? value : this.min
        this.$emit('input', num)
      }
    }
  }
}

function isNumber (value) {
  return typeof value === 'number'
}
</script>
