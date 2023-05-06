// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    // detectBrowserLanguage: {
    //   useCookie: true,
    // },
    vueI18n: './i18n.config.ts'
  }
});
