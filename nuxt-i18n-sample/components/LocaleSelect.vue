<script setup lang="ts">
const { setLocaleCookie, setLocale } = useI18n()
const locale = useCookieLocale()
watch(locale, (newValue, _) => {
  setLocale(newValue)
})
</script>

<template>
    <select v-model="locale">
      <option value="ja">日本語</option>
      <option value="en">English</option>
    </select>
</template>
