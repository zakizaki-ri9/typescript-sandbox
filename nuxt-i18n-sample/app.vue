<script setup>
const { setLocale } = useI18n()
console.log({
  "useCookieLocale().value": useCookieLocale().value,
})

// setLocale(useBrowserLocale())
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/">index</NuxtLink> / <NuxtLink to="/about">about</NuxtLink>
    </header>
    <NuxtPage />
  </div>
</template>
