<template>
  <button :disabled="disabled" :class="['m-8', $style.button]">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled?: boolean
  }>(),
  {
    disabled: false,
  }
)
</script>

<style lang="scss" module>
.button {
  &:hover {
    cursor: pointer;
  }
}
</style>
