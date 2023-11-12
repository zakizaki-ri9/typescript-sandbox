<template>
  <div class="flex">
    <div>test</div>
    <span>span</span>
    <span class="label underline">label</span>
  </div>
</template>

<style lang="scss" scoped>
// app.vue, tailwind.css のスタイルを継承＋上書きする
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

  .underline {
    text-decoration-line: unset;
  }
}
</style>
