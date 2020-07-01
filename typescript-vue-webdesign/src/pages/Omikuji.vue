<template>
  <div class="container">
    <ex-h1>おみくじ</ex-h1>
    <apply-button>test</apply-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ApplyButton from '@/components/atoms/button/ApplyButton.vue'
import ExH1 from '@/components/atoms/heading/ExH1.vue'
export default defineComponent({
  name: 'Omikuji',
  components: {
    ApplyButton,
    ExH1
  }
})
</script>
