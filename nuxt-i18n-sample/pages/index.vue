<script setup>
const {locale} = useI18n()
</script>

<template>
  <div>
    <h1>index</h1>
    <LocaleSelect />
    <span>i18n: {{ $t("aaa") }}</span>
  </div>
</template>
