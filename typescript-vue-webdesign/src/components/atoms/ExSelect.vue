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
import { defineComponent, PropType } from '@vue/composition-api'

export type Option = {
  disabled: boolean
  label: string
  value: string
  selected: boolean
}

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<Option[]>,
      default: []
    }
  },
  setup(_, { emit }) {
    const onChange = (value: string) => {
      emit('change', value)
    }

    return {
      onChange
    }
  }
})
</script>
