<template functional>
  <button :class="[$style.btn, $style.btn_blue, data.staticClass]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'ApplyButton'
})
</script>

<style lang="scss" module>
@import 'Button.scss';
</style>
