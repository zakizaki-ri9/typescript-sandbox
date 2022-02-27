import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  buildModules: ["nuxt-windicss"],

  // @ts-ignore
  windicss: {
    analyze: true,
  },

  // see. https://github.com/nuxt/framework/issues/3393#issuecomment-1052405158
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
