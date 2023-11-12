<template>
  <div :class="$style.flex">
    <div>test</div>
    <span>span</span>
    <span :class="[$style.label, 'underline']">label</span>
  </div>
</template>

<style lang="scss" module>
// app.vue, tailwind.css のスタイルを継承＆上書きしない
.flex {
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

  // build される
  .underline {
    text-decoration-line: unset;
  }
}
</style>
