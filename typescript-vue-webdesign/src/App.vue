<template>
  <div id="app">
    <omikuji />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Omikuji from '@/components/pages/Omikuji.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Omikuji
  }
})
</script>

<style></style>
