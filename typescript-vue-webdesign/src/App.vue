<template>
  <div id="app">
    <!-- <ex-select :options="options" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { routes } from '@/router'
import ExSelect from '@/components/atoms/ExSelect.vue'

export default defineComponent({
  name: 'App',
  components: {
    ExSelect
  },
  setup() {
    const state = reactive({
      options: routes.map(route => {
        return {
          disabled: false,
          label: route.name,
          value: route.name,
          selected: false
        }
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style></style>
