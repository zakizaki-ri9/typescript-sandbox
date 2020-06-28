<template functional>
  <button :class="[$style.btn, $style.btn_blue, data.staticClass]">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ApplyButton'
})
</script>

<style lang="scss" module>
@import 'Button.scss';
</style>
