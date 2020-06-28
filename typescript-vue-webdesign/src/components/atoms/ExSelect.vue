<template>
  <select @change="onChange">
    <option
      v-for="option in options"
      :value="option.value"
      :disabled="option.disabled"
      :selected="option.selected"
      :key="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type Option = {
  disabled: boolean
  label: string
  value: string
  selected: boolean
}

export default Vue.extend({
  props: {
    options: {
      type: Array as PropType<Option[]>,
      default: []
    }
  },
  methods: {
    onChange(value: string) {
      this.$emit('change', value)
    }
  }
})
</script>
