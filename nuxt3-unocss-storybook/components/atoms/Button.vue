<template>
  <button :class="$style.button"><slot/></button>
</template>

<script lang="ts" setup>
</script>

<style module>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  @apply pl-4 pr-4;
}
</style>
