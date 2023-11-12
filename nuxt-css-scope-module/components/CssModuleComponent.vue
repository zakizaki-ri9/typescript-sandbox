<template>
  <div :class="$style.container">
    <div>test</div>
    <span>span</span>
    <span :class="$style.label">label</span>
  </div>
</template>

<style lang="scss" module>
.container {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
  }

  .label {
    font-size: 14px;
  }
}
</style>
