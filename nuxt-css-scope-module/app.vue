<template>
  <div class="grid">
    <ScopedCssComponent />
    <CssModuleComponent />
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;
}
.flex {
  font-size: 10px;
  color: green;

  span {
    font-size: 10px;
    color: blue;
  }

  .label {
    font-size: 10px;
    color: red;
  }
}
</style>
