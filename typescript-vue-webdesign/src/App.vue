<template>
  <div id="app">
    <ex-select :options="options" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from '@/router'
import ExSelect from '@/components/atoms/ExSelect.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ExSelect
  },
  data() {
    return {
      options: routes.map(route => {
        return {
          disabled: false,
          label: route.name,
          value: route.name,
          selected: false
        }
      })
    }
  }
})
</script>

<style></style>
